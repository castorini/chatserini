# Chatserini

A web app that provides a chat interface for interacting with various search indexes through ([Anserini's](https://github.com/castorini/anserini)) search API, built on top of Vercel's ([AI Chatbot Template](https://github.com/vercel/ai-chatbot)).

## Features

### Search Models
- **MS MARCO Collection**
  - Base Indexes (V1/V2)
  - Neural Encodings:
    - SPLADE++ CoCondenser-EnsembleDistil
    - cos-DPR Distil (HNSW & quantized INT8)
    - BGE-base-en-v1.5 (HNSW & quantized INT8)
    - Cohere embed-english-v3.0 (HNSW & quantized INT8)
- **BEIR Collections**
  - Multiple collections (TREC-COVID, BioASQ, etc.)
  - Index types: Flat, Multifield, SPLADE++, BGE

### Chat Interface
- Conversational interaction with search results
- Real-time streaming responses
- Support for both search and chat models
- Message history and chat persistence

## Architecture

### Core Components
- Next.js 13+ with App Router
- Vercel AI SDK for streaming
- Server-side API routes for search functionality

### Data Flow
1. User sends query through chat interface
2. Query is processed by appropriate model (chat or retrieval)
3. For search models:
   - Query is sent to Anserini backend
   - Results are formatted and sent back
4. For chat models:
   - Interaction is handled by OpenAI API
   - Responses are streamed in real-time

## Running locally

You will need to use the environment variables [defined in `.env.example`](.env.example) to run the application (you need a Postgres instance at the minimum). If you need LLM integration, you'll need to set an OpenAI API key as well.

Below are optional steps to run, if you wish you use Vercel environment variables:

1. Install Vercel CLI: `npm i -g vercel`
2. Link local instance with Vercel and GitHub accounts (creates `.vercel` directory): `vercel link`
3. Download your environment variables: `vercel env pull`

Then install dependencies and start the development server:

```bash
pnpm install
pnpm tsx lib/db/migrate.ts && pnpm run build
pnpm dev
```

Your app should now be running on [localhost:3000](http://localhost:3000/).

## Configuration

### Anserini Server
To start up the Anserini REST API, follow the instructions [here](https://github.com/castorini/anserini/blob/master/docs/rest-api.md). 
The application expects an Anserini server running at the configured host/port with the following settings:
```json
{
  "host": "localhost",
  "port": 8081,
  "apiVersion": "v1.0"
}
```