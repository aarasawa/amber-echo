---
title: SOQL and SOSL Queries in Salesforce
published: 2025-03-04
description: 'Learning about SOQL and SOSL in Salesforce environment'
image: ''
tags: ['Database', 'Apex', 'Salesforce']
category: 'Salesforce'
draft: false 
lang: 'en'
---

## SOQL Queries
<b>Salesforce Object Query Language (SOQL)</b> is used to read saved records and is structured siilar to SQL but tailored for the Lightning Platform. Due to the integration with the platform, SOQL can be used in Apex coding often referred to as <b>inline SQL</b>. 

```apex
# Example 
# SOQL are wrapped in square brackets and assigned to an array of sObjects
Account[] accts = [SELECT Name, Phone FROM Account];
```

For testing queries or inspecting the database, there is a Query Editor in the Developer Console of the Org. 

## Basic SOQL Syntax
```apex
# WHERE is an optional clause
SELECT fields FROM ObjectName [WHERE Condition]
```