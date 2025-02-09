// Define your models here.
export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
  type?: 'chat' | 'search';
  indexId?: string;
}

export const models: Array<Model> = [
// Chat models
  {
    "id": "anserini-cacm",
    "label": "CACM",
    "apiIdentifier": "anserini-java",
    "description": "Lucene index of the CACM corpus.",
    "type": "search",
    "indexId": "cacm"
  },
  {
    "id": "anserini-msmarco-v1-passage",
    "label": "MS MARCO V1 Passage",
    "apiIdentifier": "anserini-java",
    "description": "Lucene index of the MS MARCO V1 passage corpus.",
    "type": "search",
    "indexId": "msmarco-v1-passage"
  },
  {
    "id": "anserini-msmarco-v1-passage.splade-pp-ed",
    "label": "MS MARCO V1 Passage",
    "apiIdentifier": "anserini-java",
    "description": "Lucene impact index of the MS MARCO V1 passage corpus encoded by SPLADE++ CoCondenser-EnsembleDistil.",
    "type": "search",
    "indexId": "msmarco-v1-passage.splade-pp-ed"
  },
  {
    "id": "anserini-msmarco-v1-passage.cosdpr-distil.hnsw",
    "label": "MS MARCO V1 Passage",
    "apiIdentifier": "anserini-java",
    "description": "Lucene HNSW index of the MS MARCO V1 passage corpus encoded by cos-DPR Distil.",
    "type": "search",
    "indexId": "msmarco-v1-passage.cosdpr-distil.hnsw"
  },
  {
    "id": "anserini-msmarco-v1-passage.cosdpr-distil.hnsw-int8",
    "label": "MS MARCO V1 Passage",
    "apiIdentifier": "anserini-java",
    "description": "Lucene quantized (int8) HNSW index of the MS MARCO V1 passage corpus encoded by cos-DPR Distil.",
    "type": "search",
    "indexId": "msmarco-v1-passage.cosdpr-distil.hnsw-int8"
  },
  {
    "id": "anserini-msmarco-v1-passage.bge-base-en-v1.5.hnsw",
    "label": "MS MARCO V1 Passage",
    "apiIdentifier": "anserini-java",
    "description": "Lucene HNSW index of the MS MARCO V1 passage corpus encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "msmarco-v1-passage.bge-base-en-v1.5.hnsw"
  },
  {
    "id": "anserini-msmarco-v1-passage.bge-base-en-v1.5.hnsw-int8",
    "label": "MS MARCO V1 Passage",
    "apiIdentifier": "anserini-java",
    "description": "Lucene quantized (int8) HNSW index of the MS MARCO V1 passage corpus encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "msmarco-v1-passage.bge-base-en-v1.5.hnsw-int8"
  },
  {
    "id": "anserini-msmarco-v1-passage.cohere-embed-english-v3.0.hnsw",
    "label": "MS MARCO V1 Passage",
    "apiIdentifier": "anserini-java",
    "description": "Lucene HNSW index of the MS MARCO V1 passage corpus encoded by Cohere embed-english-v3.0.",
    "type": "search",
    "indexId": "msmarco-v1-passage.cohere-embed-english-v3.0.hnsw"
  },
  {
    "id": "anserini-msmarco-v1-passage.cohere-embed-english-v3.0.hnsw-int8",
    "label": "MS MARCO V1 Passage",
    "apiIdentifier": "anserini-java",
    "description": "Lucene quantized (int8) HNSW index of the MS MARCO V1 passage corpus encoded by Cohere embed-english-v3.0.",
    "type": "search",
    "indexId": "msmarco-v1-passage.cohere-embed-english-v3.0.hnsw-int8"
  },
  {
    "id": "anserini-msmarco-v2-passage",
    "label": "MS MARCO V2 Passage",
    "apiIdentifier": "anserini-java",
    "description": "Lucene index of the MS MARCO V2 passage corpus.",
    "type": "search",
    "indexId": "msmarco-v2-passage"
  },
  {
    "id": "anserini-msmarco-v2-doc",
    "label": "MS MARCO V2 Doc",
    "apiIdentifier": "anserini-java",
    "description": "Lucene index of the MS MARCO V2 document corpus.",
    "type": "search",
    "indexId": "msmarco-v2-doc"
  },
  {
    "id": "anserini-msmarco-v2-doc-segmented",
    "label": "MS MARCO V2 Segmented Doc",
    "apiIdentifier": "anserini-java",
    "description": "Lucene index of the MS MARCO V2 segmented document corpus.",
    "type": "search",
    "indexId": "msmarco-v2-doc-segmented"
  },
  {
    "id": "anserini-msmarco-v2.1-doc",
    "label": "MS MARCO V2.1 Doc",
    "apiIdentifier": "anserini-java",
    "description": "Lucene index of the MS MARCO V2.1 document corpus.",
    "type": "search",
    "indexId": "msmarco-v2.1-doc"
  },
  {
    "id": "anserini-msmarco-v2.1-doc-segmented",
    "label": "MS MARCO V2.1 Segmented Doc",
    "apiIdentifier": "anserini-java",
    "description": "Lucene index of the MS MARCO V2.1 segmented document corpus.",
    "type": "search",
    "indexId": "msmarco-v2.1-doc-segmented"
  },
  {
    "id": "anserini-beir-v1.0.0-trec-covid.flat",
    "label": "BEIR: trec-covid",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'flat' index of BEIR collection 'trec-covid'.",
    "type": "search",
    "indexId": "beir-v1.0.0-trec-covid.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-bioasq.flat",
    "label": "BEIR: bioasq",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'flat' index of BEIR collection 'bioasq'.",
    "type": "search",
    "indexId": "beir-v1.0.0-bioasq.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-nfcorpus.flat",
    "label": "BEIR: nfcorpus",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'flat' index of BEIR collection 'nfcorpus'.",
    "type": "search",
    "indexId": "beir-v1.0.0-nfcorpus.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-nq.flat",
    "label": "BEIR: nq",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'flat' index of BEIR collection 'nq'.",
    "type": "search",
    "indexId": "beir-v1.0.0-nq.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-hotpotqa.flat",
    "label": "BEIR: hotpotqa",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'flat' index of BEIR collection 'hotpotqa'.",
    "type": "search",
    "indexId": "beir-v1.0.0-hotpotqa.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-fiqa.flat",
    "label": "BEIR: fiqa",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'flat' index of BEIR collection 'fiqa'.",
    "type": "search",
    "indexId": "beir-v1.0.0-fiqa.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-signal1m.flat",
    "label": "BEIR: signal1m",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'flat' index of BEIR collection 'signal1m'.",
    "type": "search",
    "indexId": "beir-v1.0.0-signal1m.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-trec-news.flat",
    "label": "BEIR: trec-news",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'flat' index of BEIR collection 'trec-news'.",
    "type": "search",
    "indexId": "beir-v1.0.0-trec-news.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-robust04.flat",
    "label": "BEIR: robust04",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'flat' index of BEIR collection 'robust04'.",
    "type": "search",
    "indexId": "beir-v1.0.0-robust04.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-arguana.flat",
    "label": "BEIR: arguana",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'flat' index of BEIR collection 'arguana'.",
    "type": "search",
    "indexId": "beir-v1.0.0-arguana.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-webis-touche2020.flat",
    "label": "BEIR: webis-touche2020",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'flat' index of BEIR collection 'webis-touche2020'.",
    "type": "search",
    "indexId": "beir-v1.0.0-webis-touche2020.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-android.flat",
    "label": "BEIR: cqadupstack-android",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'flat' index of BEIR collection 'cqadupstack-android'.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-android.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-english.flat",
    "label": "BEIR: cqadupstack-english",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'flat' index of BEIR collection 'cqadupstack-english'.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-english.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-gaming.flat",
    "label": "BEIR: cqadupstack-gaming",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'flat' index of BEIR collection 'cqadupstack-gaming'.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-gaming.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-gis.flat",
    "label": "BEIR: cqadupstack-gis",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'flat' index of BEIR collection 'cqadupstack-gis'.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-gis.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-mathematica.flat",
    "label": "BEIR: cqadupstack-mathematica",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'flat' index of BEIR collection 'cqadupstack-mathematica'.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-mathematica.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-physics.flat",
    "label": "BEIR: cqadupstack-physics",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'flat' index of BEIR collection 'cqadupstack-physics'.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-physics.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-programmers.flat",
    "label": "BEIR: cqadupstack-programmers",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'flat' index of BEIR collection 'cqadupstack-programmers'.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-programmers.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-stats.flat",
    "label": "BEIR: cqadupstack-stats",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'flat' index of BEIR collection 'cqadupstack-stats'.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-stats.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-tex.flat",
    "label": "BEIR: cqadupstack-tex",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'flat' index of BEIR collection 'cqadupstack-tex'.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-tex.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-unix.flat",
    "label": "BEIR: cqadupstack-unix",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'flat' index of BEIR collection 'cqadupstack-unix'.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-unix.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-webmasters.flat",
    "label": "BEIR: cqadupstack-webmasters",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'flat' index of BEIR collection 'cqadupstack-webmasters'.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-webmasters.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-wordpress.flat",
    "label": "BEIR: cqadupstack-wordpress",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'flat' index of BEIR collection 'cqadupstack-wordpress'.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-wordpress.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-quora.flat",
    "label": "BEIR: quora",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'flat' index of BEIR collection 'quora'.",
    "type": "search",
    "indexId": "beir-v1.0.0-quora.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-dbpedia-entity.flat",
    "label": "BEIR: dbpedia-entity",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'flat' index of BEIR collection 'dbpedia-entity'.",
    "type": "search",
    "indexId": "beir-v1.0.0-dbpedia-entity.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-scidocs.flat",
    "label": "BEIR: scidocs",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'flat' index of BEIR collection 'scidocs'.",
    "type": "search",
    "indexId": "beir-v1.0.0-scidocs.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-fever.flat",
    "label": "BEIR: fever",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'flat' index of BEIR collection 'fever'.",
    "type": "search",
    "indexId": "beir-v1.0.0-fever.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-climate-fever.flat",
    "label": "BEIR: climate-fever",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'flat' index of BEIR collection 'climate-fever'.",
    "type": "search",
    "indexId": "beir-v1.0.0-climate-fever.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-scifact.flat",
    "label": "BEIR: scifact",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'flat' index of BEIR collection 'scifact'.",
    "type": "search",
    "indexId": "beir-v1.0.0-scifact.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-trec-covid.multifield",
    "label": "BEIR: trec-covid",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'multifield' index of BEIR collection 'trec-covid'.",
    "type": "search",
    "indexId": "beir-v1.0.0-trec-covid.multifield"
  },
  {
    "id": "anserini-beir-v1.0.0-bioasq.multifield",
    "label": "BEIR: bioasq",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'multifield' index of BEIR collection 'bioasq'.",
    "type": "search",
    "indexId": "beir-v1.0.0-bioasq.multifield"
  },
  {
    "id": "anserini-beir-v1.0.0-nfcorpus.multifield",
    "label": "BEIR: nfcorpus",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'multifield' index of BEIR collection 'nfcorpus'.",
    "type": "search",
    "indexId": "beir-v1.0.0-nfcorpus.multifield"
  },
  {
    "id": "anserini-beir-v1.0.0-nq.multifield",
    "label": "BEIR: nq",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'multifield' index of BEIR collection 'nq'.",
    "type": "search",
    "indexId": "beir-v1.0.0-nq.multifield"
  },
  {
    "id": "anserini-beir-v1.0.0-hotpotqa.multifield",
    "label": "BEIR: hotpotqa",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'multifield' index of BEIR collection 'hotpotqa'.",
    "type": "search",
    "indexId": "beir-v1.0.0-hotpotqa.multifield"
  },
  {
    "id": "anserini-beir-v1.0.0-fiqa.multifield",
    "label": "BEIR: fiqa",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'multifield' index of BEIR collection 'fiqa'.",
    "type": "search",
    "indexId": "beir-v1.0.0-fiqa.multifield"
  },
  {
    "id": "anserini-beir-v1.0.0-signal1m.multifield",
    "label": "BEIR: signal1m",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'multifield' index of BEIR collection 'signal1m'.",
    "type": "search",
    "indexId": "beir-v1.0.0-signal1m.multifield"
  },
  {
    "id": "anserini-beir-v1.0.0-trec-news.multifield",
    "label": "BEIR: trec-news",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'multifield' index of BEIR collection 'trec-news'.",
    "type": "search",
    "indexId": "beir-v1.0.0-trec-news.multifield"
  },
  {
    "id": "anserini-beir-v1.0.0-robust04.multifield",
    "label": "BEIR: robust04",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'multifield' index of BEIR collection 'robust04'.",
    "type": "search",
    "indexId": "beir-v1.0.0-robust04.multifield"
  },
  {
    "id": "anserini-beir-v1.0.0-arguana.multifield",
    "label": "BEIR: arguana",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'multifield' index of BEIR collection 'arguana'.",
    "type": "search",
    "indexId": "beir-v1.0.0-arguana.multifield"
  },
  {
    "id": "anserini-beir-v1.0.0-webis-touche2020.multifield",
    "label": "BEIR: webis-touche2020",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'multifield' index of BEIR collection 'webis-touche2020'.",
    "type": "search",
    "indexId": "beir-v1.0.0-webis-touche2020.multifield"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-android.multifield",
    "label": "BEIR: cqadupstack-android",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'multifield' index of BEIR collection 'cqadupstack-android'.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-android.multifield"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-english.multifield",
    "label": "BEIR: cqadupstack-english",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'multifield' index of BEIR collection 'cqadupstack-english'.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-english.multifield"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-gaming.multifield",
    "label": "BEIR: cqadupstack-gaming",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'multifield' index of BEIR collection 'cqadupstack-gaming'.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-gaming.multifield"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-gis.multifield",
    "label": "BEIR: cqadupstack-gis",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'multifield' index of BEIR collection 'cqadupstack-gis'.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-gis.multifield"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-mathematica.multifield",
    "label": "BEIR: cqadupstack-mathematica",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'multifield' index of BEIR collection 'cqadupstack-mathematica'.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-mathematica.multifield"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-physics.multifield",
    "label": "BEIR: cqadupstack-physics",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'multifield' index of BEIR collection 'cqadupstack-physics'.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-physics.multifield"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-programmers.multifield",
    "label": "BEIR: cqadupstack-programmers",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'multifield' index of BEIR collection 'cqadupstack-programmers'.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-programmers.multifield"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-stats.multifield",
    "label": "BEIR: cqadupstack-stats",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'multifield' index of BEIR collection 'cqadupstack-stats'.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-stats.multifield"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-tex.multifield",
    "label": "BEIR: cqadupstack-tex",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'multifield' index of BEIR collection 'cqadupstack-tex'.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-tex.multifield"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-unix.multifield",
    "label": "BEIR: cqadupstack-unix",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'multifield' index of BEIR collection 'cqadupstack-unix'.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-unix.multifield"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-webmasters.multifield",
    "label": "BEIR: cqadupstack-webmasters",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'multifield' index of BEIR collection 'cqadupstack-webmasters'.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-webmasters.multifield"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-wordpress.multifield",
    "label": "BEIR: cqadupstack-wordpress",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'multifield' index of BEIR collection 'cqadupstack-wordpress'.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-wordpress.multifield"
  },
  {
    "id": "anserini-beir-v1.0.0-quora.multifield",
    "label": "BEIR: quora",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'multifield' index of BEIR collection 'quora'.",
    "type": "search",
    "indexId": "beir-v1.0.0-quora.multifield"
  },
  {
    "id": "anserini-beir-v1.0.0-dbpedia-entity.multifield",
    "label": "BEIR: dbpedia-entity",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'multifield' index of BEIR collection 'dbpedia-entity'.",
    "type": "search",
    "indexId": "beir-v1.0.0-dbpedia-entity.multifield"
  },
  {
    "id": "anserini-beir-v1.0.0-scidocs.multifield",
    "label": "BEIR: scidocs",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'multifield' index of BEIR collection 'scidocs'.",
    "type": "search",
    "indexId": "beir-v1.0.0-scidocs.multifield"
  },
  {
    "id": "anserini-beir-v1.0.0-fever.multifield",
    "label": "BEIR: fever",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'multifield' index of BEIR collection 'fever'.",
    "type": "search",
    "indexId": "beir-v1.0.0-fever.multifield"
  },
  {
    "id": "anserini-beir-v1.0.0-climate-fever.multifield",
    "label": "BEIR: climate-fever",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'multifield' index of BEIR collection 'climate-fever'.",
    "type": "search",
    "indexId": "beir-v1.0.0-climate-fever.multifield"
  },
  {
    "id": "anserini-beir-v1.0.0-scifact.multifield",
    "label": "BEIR: scifact",
    "apiIdentifier": "anserini-java",
    "description": "Lucene inverted 'multifield' index of BEIR collection 'scifact'.",
    "type": "search",
    "indexId": "beir-v1.0.0-scifact.multifield"
  },
  {
    "id": "anserini-beir-v1.0.0-trec-covid.splade-pp-ed",
    "label": "BEIR: trec-covid",
    "apiIdentifier": "anserini-java",
    "description": "Lucene impact index of BEIR collection 'trec-covid' encoded by SPLADE++ EnsembleDistil",
    "type": "search",
    "indexId": "beir-v1.0.0-trec-covid.splade-pp-ed"
  },
  {
    "id": "anserini-beir-v1.0.0-bioasq.splade-pp-ed",
    "label": "BEIR: bioasq",
    "apiIdentifier": "anserini-java",
    "description": "Lucene impact index of BEIR collection 'bioasq' encoded by SPLADE++ EnsembleDistil",
    "type": "search",
    "indexId": "beir-v1.0.0-bioasq.splade-pp-ed"
  },
  {
    "id": "anserini-beir-v1.0.0-nfcorpus.splade-pp-ed",
    "label": "BEIR: nfcorpus",
    "apiIdentifier": "anserini-java",
    "description": "Lucene impact index of BEIR collection 'nfcorpus' encoded by SPLADE++ EnsembleDistil",
    "type": "search",
    "indexId": "beir-v1.0.0-nfcorpus.splade-pp-ed"
  },
  {
    "id": "anserini-beir-v1.0.0-nq.splade-pp-ed",
    "label": "BEIR: nq",
    "apiIdentifier": "anserini-java",
    "description": "Lucene impact index of BEIR collection 'nq' encoded by SPLADE++ EnsembleDistil",
    "type": "search",
    "indexId": "beir-v1.0.0-nq.splade-pp-ed"
  },
  {
    "id": "anserini-beir-v1.0.0-hotpotqa.splade-pp-ed",
    "label": "BEIR: hotpotqa",
    "apiIdentifier": "anserini-java",
    "description": "Lucene impact index of BEIR collection 'hotpotqa' encoded by SPLADE++ EnsembleDistil",
    "type": "search",
    "indexId": "beir-v1.0.0-hotpotqa.splade-pp-ed"
  },
  {
    "id": "anserini-beir-v1.0.0-fiqa.splade-pp-ed",
    "label": "BEIR: fiqa",
    "apiIdentifier": "anserini-java",
    "description": "Lucene impact index of BEIR collection 'fiqa' encoded by SPLADE++ EnsembleDistil",
    "type": "search",
    "indexId": "beir-v1.0.0-fiqa.splade-pp-ed"
  },
  {
    "id": "anserini-beir-v1.0.0-signal1m.splade-pp-ed",
    "label": "BEIR: signal1m",
    "apiIdentifier": "anserini-java",
    "description": "Lucene impact index of BEIR collection 'signal1m' encoded by SPLADE++ EnsembleDistil",
    "type": "search",
    "indexId": "beir-v1.0.0-signal1m.splade-pp-ed"
  },
  {
    "id": "anserini-beir-v1.0.0-trec-news.splade-pp-ed",
    "label": "BEIR: trec-news",
    "apiIdentifier": "anserini-java",
    "description": "Lucene impact index of BEIR collection 'trec-news' encoded by SPLADE++ EnsembleDistil",
    "type": "search",
    "indexId": "beir-v1.0.0-trec-news.splade-pp-ed"
  },
  {
    "id": "anserini-beir-v1.0.0-robust04.splade-pp-ed",
    "label": "BEIR: robust04",
    "apiIdentifier": "anserini-java",
    "description": "Lucene impact index of BEIR collection 'robust04' encoded by SPLADE++ EnsembleDistil",
    "type": "search",
    "indexId": "beir-v1.0.0-robust04.splade-pp-ed"
  },
  {
    "id": "anserini-beir-v1.0.0-arguana.splade-pp-ed",
    "label": "BEIR: arguana",
    "apiIdentifier": "anserini-java",
    "description": "Lucene impact index of BEIR collection 'arguana' encoded by SPLADE++ EnsembleDistil",
    "type": "search",
    "indexId": "beir-v1.0.0-arguana.splade-pp-ed"
  },
  {
    "id": "anserini-beir-v1.0.0-webis-touche2020.splade-pp-ed",
    "label": "BEIR: webis-touche2020",
    "apiIdentifier": "anserini-java",
    "description": "Lucene impact index of BEIR collection 'webis-touche2020' encoded by SPLADE++ EnsembleDistil",
    "type": "search",
    "indexId": "beir-v1.0.0-webis-touche2020.splade-pp-ed"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-android.splade-pp-ed",
    "label": "BEIR: cqadupstack-android",
    "apiIdentifier": "anserini-java",
    "description": "Lucene impact index of BEIR collection 'cqadupstack-android' encoded by SPLADE++ EnsembleDistil",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-android.splade-pp-ed"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-english.splade-pp-ed",
    "label": "BEIR: cqadupstack-english",
    "apiIdentifier": "anserini-java",
    "description": "Lucene impact index of BEIR collection 'cqadupstack-english' encoded by SPLADE++ EnsembleDistil",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-english.splade-pp-ed"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-gaming.splade-pp-ed",
    "label": "BEIR: cqadupstack-gaming",
    "apiIdentifier": "anserini-java",
    "description": "Lucene impact index of BEIR collection 'cqadupstack-gaming' encoded by SPLADE++ EnsembleDistil",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-gaming.splade-pp-ed"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-gis.splade-pp-ed",
    "label": "BEIR: cqadupstack-gis",
    "apiIdentifier": "anserini-java",
    "description": "Lucene impact index of BEIR collection 'cqadupstack-gis' encoded by SPLADE++ EnsembleDistil",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-gis.splade-pp-ed"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-mathematica.splade-pp-ed",
    "label": "BEIR: cqadupstack-mathematica",
    "apiIdentifier": "anserini-java",
    "description": "Lucene impact index of BEIR collection 'cqadupstack-mathematica' encoded by SPLADE++ EnsembleDistil",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-mathematica.splade-pp-ed"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-physics.splade-pp-ed",
    "label": "BEIR: cqadupstack-physics",
    "apiIdentifier": "anserini-java",
    "description": "Lucene impact index of BEIR collection 'cqadupstack-physics' encoded by SPLADE++ EnsembleDistil",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-physics.splade-pp-ed"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-programmers.splade-pp-ed",
    "label": "BEIR: cqadupstack-programmers",
    "apiIdentifier": "anserini-java",
    "description": "Lucene impact index of BEIR collection 'cqadupstack-programmers' encoded by SPLADE++ EnsembleDistil",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-programmers.splade-pp-ed"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-stats.splade-pp-ed",
    "label": "BEIR: cqadupstack-stats",
    "apiIdentifier": "anserini-java",
    "description": "Lucene impact index of BEIR collection 'cqadupstack-stats' encoded by SPLADE++ EnsembleDistil",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-stats.splade-pp-ed"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-tex.splade-pp-ed",
    "label": "BEIR: cqadupstack-tex",
    "apiIdentifier": "anserini-java",
    "description": "Lucene impact index of BEIR collection 'cqadupstack-tex' encoded by SPLADE++ EnsembleDistil",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-tex.splade-pp-ed"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-unix.splade-pp-ed",
    "label": "BEIR: cqadupstack-unix",
    "apiIdentifier": "anserini-java",
    "description": "Lucene impact index of BEIR collection 'cqadupstack-unix' encoded by SPLADE++ EnsembleDistil",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-unix.splade-pp-ed"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-webmasters.splade-pp-ed",
    "label": "BEIR: cqadupstack-webmasters",
    "apiIdentifier": "anserini-java",
    "description": "Lucene impact index of BEIR collection 'cqadupstack-webmasters' encoded by SPLADE++ EnsembleDistil",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-webmasters.splade-pp-ed"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-wordpress.splade-pp-ed",
    "label": "BEIR: cqadupstack-wordpress",
    "apiIdentifier": "anserini-java",
    "description": "Lucene impact index of BEIR collection 'cqadupstack-wordpress' encoded by SPLADE++ EnsembleDistil",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-wordpress.splade-pp-ed"
  },
  {
    "id": "anserini-beir-v1.0.0-quora.splade-pp-ed",
    "label": "BEIR: quora",
    "apiIdentifier": "anserini-java",
    "description": "Lucene impact index of BEIR collection 'quora' encoded by SPLADE++ EnsembleDistil",
    "type": "search",
    "indexId": "beir-v1.0.0-quora.splade-pp-ed"
  },
  {
    "id": "anserini-beir-v1.0.0-dbpedia-entity.splade-pp-ed",
    "label": "BEIR: dbpedia-entity",
    "apiIdentifier": "anserini-java",
    "description": "Lucene impact index of BEIR collection 'dbpedia-entity' encoded by SPLADE++ EnsembleDistil",
    "type": "search",
    "indexId": "beir-v1.0.0-dbpedia-entity.splade-pp-ed"
  },
  {
    "id": "anserini-beir-v1.0.0-scidocs.splade-pp-ed",
    "label": "BEIR: scidocs",
    "apiIdentifier": "anserini-java",
    "description": "Lucene impact index of BEIR collection 'scidocs' encoded by SPLADE++ EnsembleDistil",
    "type": "search",
    "indexId": "beir-v1.0.0-scidocs.splade-pp-ed"
  },
  {
    "id": "anserini-beir-v1.0.0-fever.splade-pp-ed",
    "label": "BEIR: fever",
    "apiIdentifier": "anserini-java",
    "description": "Lucene impact index of BEIR collection 'fever' encoded by SPLADE++ EnsembleDistil",
    "type": "search",
    "indexId": "beir-v1.0.0-fever.splade-pp-ed"
  },
  {
    "id": "anserini-beir-v1.0.0-climate-fever.splade-pp-ed",
    "label": "BEIR: climate-fever",
    "apiIdentifier": "anserini-java",
    "description": "Lucene impact index of BEIR collection 'climate-fever' encoded by SPLADE++ EnsembleDistil",
    "type": "search",
    "indexId": "beir-v1.0.0-climate-fever.splade-pp-ed"
  },
  {
    "id": "anserini-beir-v1.0.0-scifact.splade-pp-ed",
    "label": "BEIR: scifact",
    "apiIdentifier": "anserini-java",
    "description": "Lucene impact index of BEIR collection 'scifact' encoded by SPLADE++ EnsembleDistil",
    "type": "search",
    "indexId": "beir-v1.0.0-scifact.splade-pp-ed"
  },
  {
    "id": "anserini-beir-v1.0.0-trec-covid.bge-base-en-v1.5.hnsw",
    "label": "BEIR: trec-covid",
    "apiIdentifier": "anserini-java",
    "description": "Lucene HNSW index of BEIR collection 'trec-covid' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-trec-covid.bge-base-en-v1.5.hnsw"
  },
  {
    "id": "anserini-beir-v1.0.0-bioasq.bge-base-en-v1.5.hnsw",
    "label": "BEIR: bioasq",
    "apiIdentifier": "anserini-java",
    "description": "Lucene HNSW index of BEIR collection 'bioasq' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-bioasq.bge-base-en-v1.5.hnsw"
  },
  {
    "id": "anserini-beir-v1.0.0-nfcorpus.bge-base-en-v1.5.hnsw",
    "label": "BEIR: nfcorpus",
    "apiIdentifier": "anserini-java",
    "description": "Lucene HNSW index of BEIR collection 'nfcorpus' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-nfcorpus.bge-base-en-v1.5.hnsw"
  },
  {
    "id": "anserini-beir-v1.0.0-nq.bge-base-en-v1.5.hnsw",
    "label": "BEIR: nq",
    "apiIdentifier": "anserini-java",
    "description": "Lucene HNSW index of BEIR collection 'nq' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-nq.bge-base-en-v1.5.hnsw"
  },
  {
    "id": "anserini-beir-v1.0.0-hotpotqa.bge-base-en-v1.5.hnsw",
    "label": "BEIR: hotpotqa",
    "apiIdentifier": "anserini-java",
    "description": "Lucene HNSW index of BEIR collection 'hotpotqa' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-hotpotqa.bge-base-en-v1.5.hnsw"
  },
  {
    "id": "anserini-beir-v1.0.0-fiqa.bge-base-en-v1.5.hnsw",
    "label": "BEIR: fiqa",
    "apiIdentifier": "anserini-java",
    "description": "Lucene HNSW index of BEIR collection 'fiqa' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-fiqa.bge-base-en-v1.5.hnsw"
  },
  {
    "id": "anserini-beir-v1.0.0-signal1m.bge-base-en-v1.5.hnsw",
    "label": "BEIR: signal1m",
    "apiIdentifier": "anserini-java",
    "description": "Lucene HNSW index of BEIR collection 'signal1m' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-signal1m.bge-base-en-v1.5.hnsw"
  },
  {
    "id": "anserini-beir-v1.0.0-trec-news.bge-base-en-v1.5.hnsw",
    "label": "BEIR: trec-news",
    "apiIdentifier": "anserini-java",
    "description": "Lucene HNSW index of BEIR collection 'trec-news' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-trec-news.bge-base-en-v1.5.hnsw"
  },
  {
    "id": "anserini-beir-v1.0.0-robust04.bge-base-en-v1.5.hnsw",
    "label": "BEIR: robust04",
    "apiIdentifier": "anserini-java",
    "description": "Lucene HNSW index of BEIR collection 'robust04' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-robust04.bge-base-en-v1.5.hnsw"
  },
  {
    "id": "anserini-beir-v1.0.0-arguana.bge-base-en-v1.5.hnsw",
    "label": "BEIR: arguana",
    "apiIdentifier": "anserini-java",
    "description": "Lucene HNSW index of BEIR collection 'arguana' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-arguana.bge-base-en-v1.5.hnsw"
  },
  {
    "id": "anserini-beir-v1.0.0-webis-touche2020.bge-base-en-v1.5.hnsw",
    "label": "BEIR: webis-touche2020",
    "apiIdentifier": "anserini-java",
    "description": "Lucene HNSW index of BEIR collection 'webis-touche2020' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-webis-touche2020.bge-base-en-v1.5.hnsw"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-android.bge-base-en-v1.5.hnsw",
    "label": "BEIR: cqadupstack-android",
    "apiIdentifier": "anserini-java",
    "description": "Lucene HNSW index of BEIR collection 'cqadupstack-android' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-android.bge-base-en-v1.5.hnsw"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-english.bge-base-en-v1.5.hnsw",
    "label": "BEIR: cqadupstack-english",
    "apiIdentifier": "anserini-java",
    "description": "Lucene HNSW index of BEIR collection 'cqadupstack-english' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-english.bge-base-en-v1.5.hnsw"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-gaming.bge-base-en-v1.5.hnsw",
    "label": "BEIR: cqadupstack-gaming",
    "apiIdentifier": "anserini-java",
    "description": "Lucene HNSW index of BEIR collection 'cqadupstack-gaming' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-gaming.bge-base-en-v1.5.hnsw"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-gis.bge-base-en-v1.5.hnsw",
    "label": "BEIR: cqadupstack-gis",
    "apiIdentifier": "anserini-java",
    "description": "Lucene HNSW index of BEIR collection 'cqadupstack-gis' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-gis.bge-base-en-v1.5.hnsw"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-mathematica.bge-base-en-v1.5.hnsw",
    "label": "BEIR: cqadupstack-mathematica",
    "apiIdentifier": "anserini-java",
    "description": "Lucene HNSW index of BEIR collection 'cqadupstack-mathematica' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-mathematica.bge-base-en-v1.5.hnsw"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-physics.bge-base-en-v1.5.hnsw",
    "label": "BEIR: cqadupstack-physics",
    "apiIdentifier": "anserini-java",
    "description": "Lucene HNSW index of BEIR collection 'cqadupstack-physics' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-physics.bge-base-en-v1.5.hnsw"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-programmers.bge-base-en-v1.5.hnsw",
    "label": "BEIR: cqadupstack-programmers",
    "apiIdentifier": "anserini-java",
    "description": "Lucene HNSW index of BEIR collection 'cqadupstack-programmers' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-programmers.bge-base-en-v1.5.hnsw"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-stats.bge-base-en-v1.5.hnsw",
    "label": "BEIR: cqadupstack-stats",
    "apiIdentifier": "anserini-java",
    "description": "Lucene HNSW index of BEIR collection 'cqadupstack-stats' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-stats.bge-base-en-v1.5.hnsw"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-tex.bge-base-en-v1.5.hnsw",
    "label": "BEIR: cqadupstack-tex",
    "apiIdentifier": "anserini-java",
    "description": "Lucene HNSW index of BEIR collection 'cqadupstack-tex' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-tex.bge-base-en-v1.5.hnsw"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-unix.bge-base-en-v1.5.hnsw",
    "label": "BEIR: cqadupstack-unix",
    "apiIdentifier": "anserini-java",
    "description": "Lucene HNSW index of BEIR collection 'cqadupstack-unix' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-unix.bge-base-en-v1.5.hnsw"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-webmasters.bge-base-en-v1.5.hnsw",
    "label": "BEIR: cqadupstack-webmasters",
    "apiIdentifier": "anserini-java",
    "description": "Lucene HNSW index of BEIR collection 'cqadupstack-webmasters' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-webmasters.bge-base-en-v1.5.hnsw"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-wordpress.bge-base-en-v1.5.hnsw",
    "label": "BEIR: cqadupstack-wordpress",
    "apiIdentifier": "anserini-java",
    "description": "Lucene HNSW index of BEIR collection 'cqadupstack-wordpress' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-wordpress.bge-base-en-v1.5.hnsw"
  },
  {
    "id": "anserini-beir-v1.0.0-quora.bge-base-en-v1.5.hnsw",
    "label": "BEIR: quora",
    "apiIdentifier": "anserini-java",
    "description": "Lucene HNSW index of BEIR collection 'quora' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-quora.bge-base-en-v1.5.hnsw"
  },
  {
    "id": "anserini-beir-v1.0.0-dbpedia-entity.bge-base-en-v1.5.hnsw",
    "label": "BEIR: dbpedia-entity",
    "apiIdentifier": "anserini-java",
    "description": "Lucene HNSW index of BEIR collection 'dbpedia-entity' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-dbpedia-entity.bge-base-en-v1.5.hnsw"
  },
  {
    "id": "anserini-beir-v1.0.0-scidocs.bge-base-en-v1.5.hnsw",
    "label": "BEIR: scidocs",
    "apiIdentifier": "anserini-java",
    "description": "Lucene HNSW index of BEIR collection 'scidocs' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-scidocs.bge-base-en-v1.5.hnsw"
  },
  {
    "id": "anserini-beir-v1.0.0-fever.bge-base-en-v1.5.hnsw",
    "label": "BEIR: fever",
    "apiIdentifier": "anserini-java",
    "description": "Lucene HNSW index of BEIR collection 'fever' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-fever.bge-base-en-v1.5.hnsw"
  },
  {
    "id": "anserini-beir-v1.0.0-climate-fever.bge-base-en-v1.5.hnsw",
    "label": "BEIR: climate-fever",
    "apiIdentifier": "anserini-java",
    "description": "Lucene HNSW index of BEIR collection 'climate-fever' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-climate-fever.bge-base-en-v1.5.hnsw"
  },
  {
    "id": "anserini-beir-v1.0.0-scifact.bge-base-en-v1.5.hnsw",
    "label": "BEIR: scifact",
    "apiIdentifier": "anserini-java",
    "description": "Lucene HNSW index of BEIR collection 'scifact' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-scifact.bge-base-en-v1.5.hnsw"
  },
  {
    "id": "anserini-beir-v1.0.0-trec-covid.bge-base-en-v1.5.flat",
    "label": "BEIR: trec-covid",
    "apiIdentifier": "anserini-java",
    "description": "Lucene flat index of BEIR collection 'trec-covid' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-trec-covid.bge-base-en-v1.5.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-bioasq.bge-base-en-v1.5.flat",
    "label": "BEIR: bioasq",
    "apiIdentifier": "anserini-java",
    "description": "Lucene flat index of BEIR collection 'bioasq' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-bioasq.bge-base-en-v1.5.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-nfcorpus.bge-base-en-v1.5.flat",
    "label": "BEIR: nfcorpus",
    "apiIdentifier": "anserini-java",
    "description": "Lucene flat index of BEIR collection 'nfcorpus' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-nfcorpus.bge-base-en-v1.5.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-nq.bge-base-en-v1.5.flat",
    "label": "BEIR: nq",
    "apiIdentifier": "anserini-java",
    "description": "Lucene flat index of BEIR collection 'nq' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-nq.bge-base-en-v1.5.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-hotpotqa.bge-base-en-v1.5.flat",
    "label": "BEIR: hotpotqa",
    "apiIdentifier": "anserini-java",
    "description": "Lucene flat index of BEIR collection 'hotpotqa' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-hotpotqa.bge-base-en-v1.5.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-fiqa.bge-base-en-v1.5.flat",
    "label": "BEIR: fiqa",
    "apiIdentifier": "anserini-java",
    "description": "Lucene flat index of BEIR collection 'fiqa' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-fiqa.bge-base-en-v1.5.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-signal1m.bge-base-en-v1.5.flat",
    "label": "BEIR: signal1m",
    "apiIdentifier": "anserini-java",
    "description": "Lucene flat index of BEIR collection 'signal1m' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-signal1m.bge-base-en-v1.5.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-trec-news.bge-base-en-v1.5.flat",
    "label": "BEIR: trec-news",
    "apiIdentifier": "anserini-java",
    "description": "Lucene flat index of BEIR collection 'trec-news' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-trec-news.bge-base-en-v1.5.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-robust04.bge-base-en-v1.5.flat",
    "label": "BEIR: robust04",
    "apiIdentifier": "anserini-java",
    "description": "Lucene flat index of BEIR collection 'robust04' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-robust04.bge-base-en-v1.5.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-arguana.bge-base-en-v1.5.flat",
    "label": "BEIR: arguana",
    "apiIdentifier": "anserini-java",
    "description": "Lucene flat index of BEIR collection 'arguana' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-arguana.bge-base-en-v1.5.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-webis-touche2020.bge-base-en-v1.5.flat",
    "label": "BEIR: webis-touche2020",
    "apiIdentifier": "anserini-java",
    "description": "Lucene flat index of BEIR collection 'webis-touche2020' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-webis-touche2020.bge-base-en-v1.5.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-android.bge-base-en-v1.5.flat",
    "label": "BEIR: cqadupstack-android",
    "apiIdentifier": "anserini-java",
    "description": "Lucene flat index of BEIR collection 'cqadupstack-android' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-android.bge-base-en-v1.5.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-english.bge-base-en-v1.5.flat",
    "label": "BEIR: cqadupstack-english",
    "apiIdentifier": "anserini-java",
    "description": "Lucene flat index of BEIR collection 'cqadupstack-english' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-english.bge-base-en-v1.5.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-gaming.bge-base-en-v1.5.flat",
    "label": "BEIR: cqadupstack-gaming",
    "apiIdentifier": "anserini-java",
    "description": "Lucene flat index of BEIR collection 'cqadupstack-gaming' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-gaming.bge-base-en-v1.5.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-gis.bge-base-en-v1.5.flat",
    "label": "BEIR: cqadupstack-gis",
    "apiIdentifier": "anserini-java",
    "description": "Lucene flat index of BEIR collection 'cqadupstack-gis' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-gis.bge-base-en-v1.5.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-mathematica.bge-base-en-v1.5.flat",
    "label": "BEIR: cqadupstack-mathematica",
    "apiIdentifier": "anserini-java",
    "description": "Lucene flat index of BEIR collection 'cqadupstack-mathematica' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-mathematica.bge-base-en-v1.5.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-physics.bge-base-en-v1.5.flat",
    "label": "BEIR: cqadupstack-physics",
    "apiIdentifier": "anserini-java",
    "description": "Lucene flat index of BEIR collection 'cqadupstack-physics' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-physics.bge-base-en-v1.5.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-programmers.bge-base-en-v1.5.flat",
    "label": "BEIR: cqadupstack-programmers",
    "apiIdentifier": "anserini-java",
    "description": "Lucene flat index of BEIR collection 'cqadupstack-programmers' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-programmers.bge-base-en-v1.5.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-stats.bge-base-en-v1.5.flat",
    "label": "BEIR: cqadupstack-stats",
    "apiIdentifier": "anserini-java",
    "description": "Lucene flat index of BEIR collection 'cqadupstack-stats' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-stats.bge-base-en-v1.5.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-tex.bge-base-en-v1.5.flat",
    "label": "BEIR: cqadupstack-tex",
    "apiIdentifier": "anserini-java",
    "description": "Lucene flat index of BEIR collection 'cqadupstack-tex' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-tex.bge-base-en-v1.5.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-unix.bge-base-en-v1.5.flat",
    "label": "BEIR: cqadupstack-unix",
    "apiIdentifier": "anserini-java",
    "description": "Lucene flat index of BEIR collection 'cqadupstack-unix' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-unix.bge-base-en-v1.5.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-webmasters.bge-base-en-v1.5.flat",
    "label": "BEIR: cqadupstack-webmasters",
    "apiIdentifier": "anserini-java",
    "description": "Lucene flat index of BEIR collection 'cqadupstack-webmasters' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-webmasters.bge-base-en-v1.5.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-cqadupstack-wordpress.bge-base-en-v1.5.flat",
    "label": "BEIR: cqadupstack-wordpress",
    "apiIdentifier": "anserini-java",
    "description": "Lucene flat index of BEIR collection 'cqadupstack-wordpress' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-cqadupstack-wordpress.bge-base-en-v1.5.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-quora.bge-base-en-v1.5.flat",
    "label": "BEIR: quora",
    "apiIdentifier": "anserini-java",
    "description": "Lucene flat index of BEIR collection 'quora' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-quora.bge-base-en-v1.5.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-dbpedia-entity.bge-base-en-v1.5.flat",
    "label": "BEIR: dbpedia-entity",
    "apiIdentifier": "anserini-java",
    "description": "Lucene flat index of BEIR collection 'dbpedia-entity' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-dbpedia-entity.bge-base-en-v1.5.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-scidocs.bge-base-en-v1.5.flat",
    "label": "BEIR: scidocs",
    "apiIdentifier": "anserini-java",
    "description": "Lucene flat index of BEIR collection 'scidocs' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-scidocs.bge-base-en-v1.5.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-fever.bge-base-en-v1.5.flat",
    "label": "BEIR: fever",
    "apiIdentifier": "anserini-java",
    "description": "Lucene flat index of BEIR collection 'fever' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-fever.bge-base-en-v1.5.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-climate-fever.bge-base-en-v1.5.flat",
    "label": "BEIR: climate-fever",
    "apiIdentifier": "anserini-java",
    "description": "Lucene flat index of BEIR collection 'climate-fever' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-climate-fever.bge-base-en-v1.5.flat"
  },
  {
    "id": "anserini-beir-v1.0.0-scifact.bge-base-en-v1.5.flat",
    "label": "BEIR: scifact",
    "apiIdentifier": "anserini-java",
    "description": "Lucene flat index of BEIR collection 'scifact' encoded by BGE-base-en-v1.5.",
    "type": "search",
    "indexId": "beir-v1.0.0-scifact.bge-base-en-v1.5.flat"
  }
] as const;

export const DEFAULT_MODEL_NAME: string = 'gpt-4o-mini';
export const DEFAULT_SEARCH_MODEL: Model = models.find(m => m.id === 'anserini-msmarco-base') as Model;
