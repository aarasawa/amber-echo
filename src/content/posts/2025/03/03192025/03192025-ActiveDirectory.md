---
title: Setting up a Domain Controller
published: 2025-03-19
description: 'Next part to setting up a home lab for AD.'
image: ''
tags: ['Active Directory', 'Domain Controller']
category: 'Active Directory'
draft: false 
lang: 'en'
---

## Step-by-Step
The process for setting up a domain controller follows directly after deploying the evaluation image of the Windows Server to a VM. In Server Manager, click <code>Add Roles and Features</code> and choose <b>Role-based Server Selection</b>. 

:::Note
I am planning on setting up an enterprise-level home lab so I will separate DHCP from the DC, if your computer can't handle that then add that to your Features in the next step. 
:::