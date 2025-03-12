---
title: Looking at Apex Triggers
published: 2025-03-11
description: 'Basics of Apex Triggers in Salesforce'
image: ''
tags: ['Salesforce', 'Apex']
category: 'Salesforce'
draft: false 
lang: 'en'
---

## Overview on Apex Triggers
<b>Apex triggers</b> perform custom actions before or after events to records in Salesforce. They can perform actions that can be done in Apex including calling methods, executing SOQL, etc. Triggers are used to perform tasks beyond basic point-and-click tools supplied by Salesforce. 

## Syntax
Trigger definition starts with the keyword <code>trigger</code> followed by the name, Salesforce object it is associated with, then conditions it works under. Multiple trigger events can be specified in a comma-separated list. 

```apex
trigger TriggerName on ObjectName (trigger_events) {
  code_block
}
```

## Types of Triggers
<b>Before triggers</b> update or validate record values BEFORE they're saved to the database.</br>
<b>After triggers</b> access field values that are set by the system and affect changes in other records, records that fire this trigger are read-only. 
