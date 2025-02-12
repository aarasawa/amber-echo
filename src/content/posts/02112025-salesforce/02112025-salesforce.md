---
title: Learning Salesforce
published: 2025-02-11
description: ''
image: ''
tags: ['Salesforce', 'Trailhead']
category: 'Salesforce'
draft: false 
lang: 'en'
---

## Introduction
Part of the interview process, the job that I am shooting for may ask for experience regarding Salesforce. Althought I have no professional experience in Salesforce, they have a learning platform called Trailhead. They offer a variety of path for learning called Trails, Quests, and Modules. 

## Platform Development Basics

### Develop Without Code
The Salesforce platform serves as a SaaS, PaaS with several tools for creating solutions for an organization. They provide the tools and services for creating frontend and backend stacks on their platform, they use different names for them. Database tables are <em>objects</em>, columns in a database are <em>fields</em>, rows in a database are <em>records</em>. Each set of objects, fields, records, functionality, etc. constitute an <em>app</em>. Standard objects are built with Salesforce by default, user-defined objects are referred to as <em>custom objects</em>. Simple enough. 

Salesforce pushes something called <em>metadata-driven development model</em> essentially using the metadata generated to generate user experience/interface (graphs, lists, etc) for you. In this case metadata refers to the the fields that you (the developer) create for gathering the actual data. 

Some tools are the Schema Builder, Lightning App Builder, and Flow Builder. Each are GUI for creating a schema, application, flow, etc. without needing to code anything. 

### Coding with Salesforce
Salesforce uses a couple programming languages for its services.

#### Lightning Web Components (LWC) 
Lightning Web Components is a JavaScript-based user interface development framework, similar to React. Lightning web components have a .js file and .html file. They may also have .css to style them. Each component includes additional assets such as a test folder and a .xml file. There are included mobile simulators for testing components on a mobile view. 

#### Apex 
Apex is Salesforce' proprietary programming language which is strongly typed, object-oriented for adding business logic to system events (i.e. press button to update records). It has similar syntax to Java. For example, we can extend the functionality for Flows and Flow Builder using Apex.

#### Node.js 
Node.js is an asynchronous event-driven JavaScript runtime designed to build scalable network applications. It is used for developer tooling but not directly on Salesforce. New projects using Salesforce CLI include a set of Node.js scripts and utilities. 

### Extending Salesforce
Every object in your org has an API name for accessing data for that object. For example, Propertymap.js

![propertyMap.js](./propertyMap.png)

The list of commonly used APIs Salesforce

| API | Description |
---------------------
| SOAP | Integrate org's data with other applications using standard SOAP protocols. |
