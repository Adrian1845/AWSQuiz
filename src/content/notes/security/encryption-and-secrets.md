---
title: Encryption, KMS and secrets
domain: security
services: [AWS KMS, AWS Secrets Manager, AWS Systems Manager Parameter Store, AWS Certificate Manager, AWS CloudHSM]
tags: [encryption, secrets, key-management, certificates]
keywords: [kms, cmk, customer-managed-key, key-policy, secrets-manager, parameter-store, acm, cloudhsm, encryption, tls]
---

# Encryption, KMS and secrets

| Tool | Use it for |
|---|---|
| KMS | create/control encryption keys and audit cryptographic use |
| Secrets Manager | rotate and retrieve database/API secrets |
| SSM Parameter Store | configuration/secrets hierarchy; lower-cost simple parameter store |
| ACM | provision/manage public and private TLS certificates for supported integrations |
| CloudHSM | dedicated hardware security module control requirements |

Envelope encryption means data is encrypted with a data key, while KMS protects the data key. KMS key policy is central to access. For cross-account encrypted resources, make sure both the resource policy and KMS key policy permit the caller.

## Customer managed KMS keys (formerly CMKs)

**CMK** (customer master key) is the older term for an AWS KMS key. In current AWS terminology, a key that you create, own, and administer is a **customer managed KMS key**. The underlying concept has not changed.

Choose a customer managed key when you need control beyond an AWS managed key: define the key policy, use IAM policies and grants, create aliases, enable or disable the key, rotate its key material, and schedule deletion. It can be selected by many integrated AWS services, such as S3, EBS, RDS, and Secrets Manager, and its use is recorded in CloudTrail.

- **Key policy first:** every KMS key has one key policy. It is the primary resource policy for access; an IAM allow is ineffective unless the key policy allows IAM policies to grant access. Use grants for narrowly scoped, often temporary delegated access.
- **Customer managed vs. AWS managed:** AWS creates and operates AWS managed keys for an AWS service. You can view and audit them, but cannot change their policy, rotation settings, or deletion schedule. Use a customer managed key for explicit access control, cross-account design, custom lifecycle control, or an alias you manage.
- **Rotation:** automatic and on-demand rotation are options for eligible customer managed symmetric encryption keys. Rotation replaces backing key material transparently; old material remains available to decrypt existing ciphertext. If a policy requires a different key on a defined schedule, create a new key, update the alias or application configuration, and retain the old key while its ciphertext still needs decryption.
- **Regional and cross-account:** a key policy applies in its Region. For an encrypted resource shared across accounts, the consuming principal needs permission from the KMS key policy as well as the relevant resource policy; for replication, grant the service role the required source decrypt and destination encrypt permissions.

**Exam cue:** “control access to a customer-managed CMK” points first to a **KMS key policy**. “Need the key to be owned and configured by the customer” points to a **customer managed KMS key**, not an AWS managed key.

See [AWS KMS key concepts](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html) and [KMS key policies](https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html).
