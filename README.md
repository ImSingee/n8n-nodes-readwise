# n8n-nodes-readwise

This is an n8n community node. It lets you use Readwise in your n8n workflows.

Readwise is a popular read-later and knowledge management service that helps users collect, organize, and review highlights and insights from web articles, ebooks, podcasts, and other sources.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  
[Compatibility](#compatibility)  
[Resources](#resources)  

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

Currently, this node only supports Readwise Reader API. The following operations are supported:

- **Document**
    - **Create** - Save a new document to Readwise Reader
    - **List** - Get a list of saved documents
    - **Update** - Update an existing document
    - **Delete** - Delete a document
- **Tag**
    - **List** - Get all tags

## Credentials

To use this node, you need to:

1. Have a Readwise account
2. Obtain a Readwise API access token:
   - Log in to [Readwise](https://readwise.io/)
   - Visit the [Access Token page](https://readwise.io/access_token)
   - Click "Get access token"
3. Configure the "Readwise API" credential type in n8n with your access token

## Compatibility

- Minimum n8n version: 1.0.0
- Supported Node.js version: >=20.15

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
* [Readwise API documentation](https://readwise.io/api_deets)
* [Readwise Reader API documentation](https://readwise.io/reader_api)
* [Readwise website](https://readwise.io/)

