---
title: 'Windows Server 2019 Active Directory Domain Controller Set Up Lab'
description: Created a Windows Server 2019 AD DC environment with a DC virtual machine and MS machine, performing various security tasks to close the gap between vulnerabilities and threats by implementing PoLP, JEA, GPOs, and security best practices.
publishDate: 'Jun 21 2025'
isFeatured: true
seo:
  image:
    src: '/project-2.jpg'
    alt: Project preview
---

![Project preview](/Imagen1.png)

**Project Overview:**
By setting up a Windows Server 2019 Active Directory Domain Controller environment, we are able to simulate a corporate network that needs better practices and will need security principles to be implemented in order to mitigate all possible attack vectors we may encounter during any working space. Principles such as "Principle of Least Privilege", "Just Enough Administration", configuring the proper Group Policy Objects, running Powershell scripts, and others. 

## Objectives

1. Deploy a Windows Server 2019 AD DC with their MS machine.
2. Ensuring all security principles are being implemented for a safer active directory.
3. Covering all possible methods to develop best security practices.

## Features

1. **Least Privilege Access & Role-Based Administration:**

- Implemented granular RBAC using Organizational Units (OUs) and delegated permissions to limit user/admin access.
- Enforced separation of duties by defining custom admin roles (e.g., Help Desk vs. Domain Admins).
- Used Privileged Access Workstations (PAWs) for sensitive operations to reduce credential exposure.

2. **Group Policy Security Hardening:**

- Applied Microsoft Security Baselines via GPOs.
- Configured Account Policies: Password complexity, lockout thresholds, and Kerberos ticket lifetimes.
- Disabled legacy protocols (LAN Manager, SMBv1) and enforced AES encryption for Kerberos.

3. **Credential Theft Mitigation**

- Deployed LAPS (Local Administrator Password Solution) to randomize and manage local admin passwords.
- Enabled Protected Users group to block weak credential caching.
- Restricted LAPS password access to specific security groups to limit exposure.

4. **Secure Authentication & Federation:**

- Enforced LDAPS (LDAP over SSL/TLS) to encrypt directory queries.
- Configured Azure AD Connect with password hash sync for hybrid identity (optional but modern).
- Implemented Multi-Factor Authentication (MFA) for admin accounts via Azure MFA.

## Outcome

This Windows Server Active Directory lab provided hands-on experience with enterprise-grade security practices, including access control, policy enforcement, and threat mitigation. By implementing industry-standard protections, the project demonstrates practical sysadmin and cybersecurity skills applicable to modern IT environments.

![Project preview](/image2.png)