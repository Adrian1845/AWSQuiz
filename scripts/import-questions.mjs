import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const inbox = join(root, "imports/questions");
const outputRoot = join(root, "src/content/questions");
const commit = process.argv.includes("--commit");
const ids = new Set();
const files = readdirSync(inbox).filter((file) => {
  if (file.endsWith(".json")) return true;
  const path = join(inbox, file);
  return existsSync(path) && readFileSync(path, "utf8").trimStart().startsWith("{");
}).sort();

for (const domain of readdirSync(outputRoot)) {
  const directory = join(outputRoot, domain);
  if (!existsSync(directory)) continue;
  for (const file of readdirSync(directory).filter((name) => name.endsWith(".md"))) {
    const match = readFileSync(join(directory, file), "utf8").match(/^id: (.+)$/m);
    if (match) ids.add(match[1]);
  }
}

const slug = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 72);
const escapeYaml = (value) => String(value).replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\r?\n/g, "\\n");
const yamlList = (values) => `[${values.map((value) => `"${escapeYaml(value)}"`).join(", ")}]`;
const fail = (file, message) => { throw new Error(`${relative(root, file)}: ${message}`); };
const cleanHtml = (value = "") => String(value).replace(/<br[^>]*>/gi, "\n").replace(/<[/]?p>/gi, "\n").replace(/<li>/gi, "- ").replace(/<[^>]*>/g, "").replace(/&nbsp;/gi, " ").replace(/&amp;/gi, "&").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&#39;/gi, "'").replace(/&quot;/gi, '"').split("\n").map((line) => line.trim()).filter(Boolean).join("\n\n");
const parseJsonDocuments = (contents, file) => {
  const documents = [];
  let remaining = contents.trimStart();

  while (remaining) {
    try {
      documents.push(JSON.parse(remaining));
      break;
    } catch (error) {
      const position = Number(String(error.message).match(/position (\d+)/)?.[1]);
      if (!Number.isInteger(position) || position <= 0) fail(file, "invalid JSON");
      try {
        documents.push(JSON.parse(remaining.slice(0, position)));
      } catch {
        fail(file, "invalid JSON");
      }
      remaining = remaining.slice(position).trimStart();
    }
  }

  return documents;
};

const sourceMetadata = {
  "Availability_Scalability.json": { domain: "compute", services: ["EC2", "Auto Scaling", "Elastic Load Balancing"], tags: ["availability", "scalability", "imported"] },
  "EC2.json": { domain: "compute", services: ["EC2"], tags: ["ec2", "imported"] },
  "EC2_SAA.json": { domain: "compute", services: ["EC2"], tags: ["ec2", "saa", "imported"] },
  "IAM.json": { domain: "security", services: ["IAM"], tags: ["iam", "security", "imported"] },
  "EC2_storage": { domain: "storage", services: ["EC2", "EBS", "EFS"], tags: ["ec2", "storage", "imported"] },
  "Advances_S3.json": { domain: "storage", services: ["S3"], tags: ["s3", "storage", "imported"] },
  "S3.json": { domain: "storage", services: ["S3"], tags: ["s3", "storage", "imported"] },
  "S3_Security.json": { domain: "security", services: ["S3", "IAM", "KMS"], tags: ["s3", "security", "imported"] },
  "RDS_Aurora_ElastiCache.json": { domain: "databases", services: ["RDS", "Aurora", "ElastiCache"], tags: ["rds", "aurora", "elasticache", "imported"] },
  "Route53.json": { domain: "networking", services: ["Route 53"], tags: ["route53", "dns", "imported"] },
  "SAA_discusion.json": { domain: "architecture", services: [], tags: ["saa", "architecture", "imported"] },
  "AWS_Storage": { domain: "storage", services: ["S3", "EBS", "EFS", "FSx", "DataSync", "Storage Gateway"], tags: ["storage", "imported"] },
  "CloduFront.json": { domain: "networking", services: ["CloudFront", "Route 53", "Global Accelerator"], tags: ["cloudfront", "edge", "networking", "imported"] },
  "Containers.json": { domain: "compute", services: ["ECS", "EKS", "Fargate", "ECR"], tags: ["containers", "compute", "imported"] },
  "Databases.json": { domain: "databases", services: ["RDS", "Aurora", "DynamoDB", "ElastiCache", "Redshift"], tags: ["databases", "imported"] },
  "Decoupling.json": { domain: "integration", services: ["SQS", "SNS", "EventBridge", "Kinesis", "Amazon MQ"], tags: ["decoupling", "integration", "imported"] },
  "Serverless.json": { domain: "compute", services: ["Lambda", "API Gateway", "Step Functions"], tags: ["serverless", "compute", "imported"] },
  "Serverless_Architecture": { domain: "architecture", services: ["Lambda", "API Gateway", "Kinesis", "EventBridge"], tags: ["serverless", "architecture", "imported"] },
  "Data&Analytics.json": { domain: "data-and-analytics", services: ["Athena", "Glue", "EMR", "Kinesis", "Redshift"], tags: ["data-analytics", "imported"] },
  "ML.json": { domain: "machine-learning", services: ["SageMaker", "Rekognition", "Comprehend", "Lex", "Polly", "Transcribe"], tags: ["machine-learning", "imported"] },
  "security.json": { domain: "security", services: ["IAM", "KMS", "Cognito", "WAF", "Shield", "GuardDuty"], tags: ["security", "imported"] },
  "WhitePaper.json": { domain: "architecture", services: [], tags: ["whitepaper", "architecture", "imported"] },
  "OtherServices.json": { domain: "operations", services: ["CloudFormation", "Systems Manager", "AWS Organizations"], tags: ["other-services", "operations", "imported"] },
  "IAMAdvanced": { domain: "security", services: ["IAM", "AWS Organizations", "STS"], tags: ["iam", "security", "imported"] },
  "DisasterReovery.json": { domain: "architecture", services: ["Route 53", "S3", "RDS", "AWS Backup"], tags: ["disaster-recovery", "architecture", "imported"] },
  "Netowrking.json": { domain: "networking", services: ["VPC", "Route 53", "CloudFront", "Transit Gateway", "Direct Connect"], tags: ["networking", "imported"] },
  "Monitoring.json": { domain: "operations", services: ["CloudWatch", "CloudTrail", "AWS Config", "X-Ray"], tags: ["monitoring", "operations", "imported"] },
};

function normalizeQuestion(source, file, position) {
  const title = source.title ?? source.question;
  if (!title || typeof title !== "string") fail(file, `entry ${position}: title or question is required`);
  const domain = slug(source.domain ?? "miscellaneous");
  const rawChoices = source.choices ?? source.options;
  if (!Array.isArray(rawChoices) || rawChoices.length < 2) fail(file, `entry ${position}: at least two choices are required`);
  const choices = rawChoices.map((choice, index) => typeof choice === "string" ? { id: String.fromCharCode(97 + index), text: choice } : { id: String(choice.id ?? String.fromCharCode(97 + index)), text: choice.text });
  if (choices.some((choice) => !choice.text)) fail(file, `entry ${position}: every choice needs text`);
  const answer = source.correct ?? source.answer;
  const correct = Array.isArray(answer) ? answer : [answer];
  const correctIds = correct.map((value) => typeof value === "number" ? choices[value]?.id : choices.find((choice) => choice.id === value || choice.text === value)?.id).filter(Boolean);
  if (!correctIds.length || correctIds.length !== correct.length) fail(file, `entry ${position}: correct answer does not match a choice`);
  const type = source.type ?? (correctIds.length > 1 ? "multiple" : "single");
  if (!['single', 'multiple'].includes(type) || (type === 'single' && correctIds.length !== 1)) fail(file, `entry ${position}: invalid question type`);
  const id = source.id ?? `saa-import-${slug(title)}`;
  return { id, title, domain, services: source.services ?? [], difficulty: source.difficulty ?? "medium", type, choices, correct: correctIds, references: source.references ?? [], tags: source.tags ?? ["imported"], status: source.status ?? "draft", explanation: source.explanation ?? source.body ?? "No explanation was provided." };
}

function normalizeExportedItem(item, file, position) {
  const metadata = sourceMetadata[file.split("/").pop()] ?? { domain: "miscellaneous", services: [], tags: ["imported"] };
  const correctOption = item.correctOption;
  if (!item || !correctOption) fail(file, `entry ${position}: missing question or correct option`);
  const choices = (item.options ?? []).map((option) => ({ id: String(option.id), text: cleanHtml(option.text) }));
  const correctText = cleanHtml(correctOption.text);
  const correctExplanation = cleanHtml(correctOption.explanation) || cleanHtml(item.explanation) || `The correct answer is **${correctText}**.`;
  const incorrectExplanations = (item.options ?? []).filter((option) => option.id !== correctOption.id && cleanHtml(option.explanation)).map((option) => `- **${cleanHtml(option.text)}:** ${cleanHtml(option.explanation)}`);
  return {
    id: `saa-source-${slug(item.id)}`,
    title: cleanHtml(item.text),
    domain: metadata.domain,
    services: metadata.services,
    difficulty: "medium",
    type: "single",
    choices,
    correct: [String(correctOption.id)],
    references: [],
    tags: metadata.tags,
    status: "draft",
    explanation: `${correctExplanation}${incorrectExplanations.length ? `\n\n## Why the other options are incorrect\n\n${incorrectExplanations.join("\n")}` : ""}`,
  };
}

const assessmentDomains = Object.fromEntries(Object.entries({
  databases: [203, 303, 311, 315, 319],
  storage: [205, 223, 231, 237, 271, 285, 287, 299, 305, 313],
  networking: [209, 215, 235, 249, 251, 255, 269, 273, 289, 309, 317, 327, 329],
  security: [207, 213, 225, 229, 233, 241, 245, 247, 257, 259, 261, 275, 277, 279, 297, 323, 325, 331],
  compute: [217, 227, 267, 291, 295, 321],
  integration: [211, 243, 253, 283],
  operations: [219, 239, 265, 293, 307],
  "data-and-analytics": [221, 263, 301],
  "machine-learning": [281],
}).flatMap(([domain, suffixes]) => suffixes.map((suffix) => [`119197${suffix}`, domain])));

const servicePatterns = [
  ["Amazon RDS Custom", /\bRDS Custom\b/i], ["Amazon Aurora Global Database", /\bAurora Global Database\b/i],
  ["DynamoDB Accelerator (DAX)", /\b(?:DAX|DynamoDB Accelerator)\b/i],
  ["Amazon DynamoDB", /\bDynamoDB\b/i], ["Amazon RDS", /\b(?:Amazon )?RDS\b/i],
  ["Amazon Aurora", /\bAurora\b/i], ["Amazon Neptune", /\bNeptune\b/i],
  ["Amazon ECS", /\b(?:Amazon )?ECS\b|\bElastic Container Service\b/i],
  ["Amazon EKS", /\b(?:Amazon )?EKS\b|\bElastic Kubernetes Service\b/i],
  ["AWS Fargate", /\bFargate\b/i], ["AWS Lambda", /\bLambda\b/i],
  ["Amazon EC2", /\b(?:Amazon )?EC2\b|\bElastic Compute Cloud\b/i],
  ["AWS Elastic Beanstalk", /\bElastic Beanstalk\b/i],
  ["Amazon S3", /\b(?:Amazon )?S3\b|\bSimple Storage Service\b/i],
  ["Amazon EBS", /\b(?:Amazon )?EBS\b|\bElastic Block Store\b/i],
  ["Amazon EFS", /\b(?:Amazon )?EFS\b|\bElastic File System\b/i],
  ["Amazon FSx", /\bFSx\b/i], ["AWS Storage Gateway", /\bStorage Gateway\b|\bFile Gateway\b/i],
  ["AWS DataSync", /\bDataSync\b/i], ["AWS Direct Connect", /\bDirect Connect\b/i],
  ["AWS Global Accelerator", /\bGlobal Accelerator\b/i], ["AWS Transit Gateway", /\btransit gateway\b/i],
  ["Amazon VPC", /\bVPC\b|\bvirtual private cloud\b/i],
  ["AWS IAM Identity Center", /\bIAM Identity Center\b/i],
  ["AWS IAM", /\bIAM\b|\bIdentity and Access Management\b/i],
  ["AWS Directory Service", /\bDirectory Service\b|\bAD Connector\b/i],
  ["Amazon CloudWatch", /\bCloudWatch\b/i], ["AWS Config", /\bAWS Config\b/i],
  ["AWS Certificate Manager", /\b(?:ACM|Certificate Manager)\b/i], ["AWS KMS", /\b(?:KMS|Key Management Service)\b/i],
  ["Amazon SQS", /\b(?:Amazon )?SQS\b|\bSimple Queue Service\b/i],
  ["Amazon SNS", /\b(?:Amazon )?SNS\b|\bSimple Notification Service\b/i],
  ["Amazon EventBridge", /\bEventBridge\b/i], ["Amazon Kinesis Data Streams", /\bKinesis Data Streams\b|\bKDS\b/i],
  ["AWS DMS", /\b(?:AWS )?DMS\b|\bDatabase Migration Service\b/i],
  ["AWS SCT", /\b(?:AWS )?SCT\b|\bSchema Conversion Tool\b/i],
  ["Amazon CloudFront", /\bCloudFront\b/i], ["Amazon GuardDuty", /\bGuardDuty\b/i],
  ["Amazon Macie", /\bMacie\b/i], ["IAM Access Analyzer", /\bAccess Analyzer\b/i],
  ["AWS Transfer Family", /\bTransfer Family\b/i], ["Amazon OpenSearch Service", /\bOpenSearch\b/i],
  ["Amazon Comprehend", /\bComprehend\b/i], ["AWS Snow Family", /\bSnowball\b|\bSnow Family\b/i],
  ["AWS Cost Anomaly Detection", /\bCost Anomaly Detection\b/i],
  ["AWS Cost Optimization Hub", /\bCost Optimization Hub\b/i],
];

const serviceDomains = {
  "Amazon RDS Custom": "databases", "Amazon Aurora Global Database": "databases",
  "DynamoDB Accelerator (DAX)": "databases", "Amazon DynamoDB": "databases",
  "Amazon RDS": "databases", "Amazon Aurora": "databases", "Amazon Neptune": "databases",
  "Amazon ECS": "compute", "Amazon EKS": "compute", "AWS Fargate": "compute",
  "AWS Lambda": "compute", "Amazon EC2": "compute", "AWS Elastic Beanstalk": "compute",
  "Amazon S3": "storage", "Amazon EBS": "storage", "Amazon EFS": "storage",
  "Amazon FSx": "storage", "AWS Storage Gateway": "storage", "AWS DataSync": "storage",
  "AWS Snow Family": "storage", "AWS Transfer Family": "storage",
  "AWS Direct Connect": "networking", "AWS Global Accelerator": "networking",
  "AWS Transit Gateway": "networking", "Amazon VPC": "networking",
  "Amazon CloudFront": "networking", "AWS IAM Identity Center": "security",
  "AWS IAM": "security", "AWS Directory Service": "security", "AWS Config": "security",
  "AWS Certificate Manager": "security", "AWS KMS": "security",
  "Amazon GuardDuty": "security", "Amazon Macie": "security", "IAM Access Analyzer": "security",
  "Amazon SQS": "integration", "Amazon SNS": "integration",
  "Amazon EventBridge": "integration", "Amazon Kinesis Data Streams": "integration",
  "AWS DMS": "operations", "AWS SCT": "operations", "Amazon CloudWatch": "operations",
  "AWS Cost Anomaly Detection": "operations", "AWS Cost Optimization Hub": "operations",
  "Amazon OpenSearch Service": "data-and-analytics", "Amazon Comprehend": "machine-learning",
};

function inferAssessmentDomain(item, correctText) {
  if (item.section === "Design Secure Architectures") return "security";
  const generic = new Set(["Amazon EC2", "Amazon S3", "Amazon VPC", "AWS IAM"]);
  const matches = servicePatterns.map(([name, pattern]) => ({ name, index: correctText.search(pattern) })).filter(({ index }) => index >= 0).sort((a, b) => a.index - b.index);
  const primary = matches.find(({ name }) => !generic.has(name)) ?? matches[0];
  return serviceDomains[primary?.name] ?? (item.section === "Design Cost-Optimized Architectures" ? "operations" : "architecture");
}

function normalizeAssessment(item, file, position) {
  const sourceId = String(item.id ?? "");
  const title = cleanHtml(item.question_plain ?? item.prompt?.question).replace(/\s+/g, " ").trim();
  const answers = item.prompt?.answers;
  const correct = item.correct_response;
  if (!/^\d+$/.test(sourceId) || !title) fail(file, `entry ${position}: assessment needs numeric id and prompt`);
  if (!Array.isArray(answers) || answers.length < 2) fail(file, `entry ${position}: assessment needs answers`);
  if (!Array.isArray(correct) || !correct.length) fail(file, `entry ${position}: assessment needs correct_response`);
  const choices = answers.map((answer, index) => ({ id: String.fromCharCode(97 + index), text: cleanHtml(answer) }));
  if (choices.some((choice) => !choice.text)) fail(file, `entry ${position}: empty answer`);
  if (correct.some((id) => !choices.some((choice) => choice.id === id)) || new Set(correct).size !== correct.length) fail(file, `entry ${position}: invalid correct_response`);
  const type = item.assessment_type === "multi-select" ? "multiple" : item.assessment_type === "multiple-choice" ? "single" : null;
  if (!type || (type === "single" && correct.length !== 1) || (type === "multiple" && correct.length < 2)) fail(file, `entry ${position}: invalid assessment_type`);
  const correctText = correct.map((id) => choices.find((choice) => choice.id === id)?.text).join(" ");
  const comparisonText = `${title} ${correctText}`;
  const services = servicePatterns.filter(([, pattern]) => pattern.test(comparisonText)).map(([name]) => name);
  const section = slug(item.section ?? "unknown-section");
  const examTag = slug(file.split(/[\\/]/).pop().replace(/\.[^.]+$/, ""));
  const tags = ["imported", examTag, section];
  if (["119197221", "119197231", "119197249"].includes(sourceId)) tags.push("source-answer-needs-review");
  return {
    id: `saa-source-${sourceId}`,
    title,
    domain: assessmentDomains[sourceId] ?? inferAssessmentDomain(item, correctText),
    services,
    difficulty: "medium",
    type,
    choices,
    correct,
    references: [],
    tags,
    status: "draft",
    explanation: cleanHtml(item.prompt?.explanation) || "The source provided no explanation.",
  };
}

const prepared = [];
for (const name of files) {
  const file = join(inbox, name);
  const documents = parseJsonDocuments(readFileSync(file, "utf8"), file);
  if (documents.every((document) => Array.isArray(document.results) && document.results.every((entry) => entry._class === "user_answers_assessment"))) {
    console.log(`Skipping assessment results in ${relative(root, file)} (preserved for analysis).`);
    continue;
  }
  if (/results\.json$/i.test(name) && documents.every((document) => Array.isArray(document.results) && document.results.every((entry) => entry._class === "assessment"))) {
    console.log(`Skipping ${relative(root, file)}: named as results but contains questions, not scores (preserved).`);
    continue;
  }
  const assessments = documents.flatMap((document) => Array.isArray(document.results) && document.results.every((entry) => entry._class === "assessment") ? document.results : []);
  const exportedItems = [...new Map(documents.flatMap((parsed) => parsed.data?.quizLatestAttemptByQuizId?.itemResponses?.map((response) => response.item).filter(Boolean) ?? parsed.data?.quizItemSearch?.items?.filter(Boolean) ?? []).map((item) => [item.id, item])).values()];
  const entries = documents.flatMap((parsed) => Array.isArray(parsed) ? parsed : [parsed]);
  const questions = assessments.length ? assessments.map((item, index) => normalizeAssessment(item, file, index + 1)) : exportedItems.length ? exportedItems.map((item, index) => normalizeExportedItem(item, file, index + 1)) : entries.map((entry, index) => normalizeQuestion(entry, file, index + 1));
  for (const question of questions) {
    if (ids.has(question.id)) fail(file, `duplicate id ${question.id}`);
    ids.add(question.id);
  }
  prepared.push({ file, questions });
}

if (!prepared.length) {
  console.log("No question JSON files found in imports/questions.");
  process.exit(0);
}

for (const { file, questions } of prepared) console.log(`${commit ? "Importing" : "Would import"} ${questions.length} question(s) from ${relative(root, file)}.`);
if (!commit) {
  console.log("Preview complete. Run npm run import:questions -- --commit to write Markdown files and remove processed JSON.");
  process.exit(0);
}

for (const { file, questions } of prepared) {
  for (const question of questions) {
    const directory = join(outputRoot, question.domain);
    mkdirSync(directory, { recursive: true });
    const filename = join(directory, `${slug(question.id)}.md`);
    if (existsSync(filename)) fail(file, `output file already exists: ${relative(root, filename)}`);
    const markdown = `---\nid: ${question.id}\ntitle: "${escapeYaml(question.title)}"\ndomain: ${question.domain}\nservices: ${yamlList(question.services)}\ndifficulty: ${question.difficulty}\ntype: ${question.type}\nchoices:\n${question.choices.map((choice) => `  - id: ${choice.id}\n    text: "${escapeYaml(choice.text)}"`).join("\n")}\ncorrect: ${yamlList(question.correct)}\nreferences: [${question.references.map((reference) => `{ note: ${reference.note}${reference.section ? `, section: ${reference.section}` : ""} }`).join(", ")}]\ntags: ${yamlList(question.tags)}\nstatus: ${question.status}\nlastReviewed: ${new Date().toISOString().slice(0, 10)}\n---\n\n## Explanation\n\n${question.explanation}\n`;
    writeFileSync(filename, markdown);
  }
  rmSync(file);
}

console.log("Imported all questions and removed the processed JSON input files.");
