---
title: "Introduction to LLMs, LangChain and LangGraph"
date: "2024-06-07"
description: "This blog post documents my journey of interacting and developing LLM pipelines."
---

This is the first time I am writing an educative blog post about what I've learned about three main topics in Generative AI:
1. Large Language Models (LLMs)
2. LangChain: The framework for writing LLM applications
3. LangGraph: The framework to build multiple LLM agents as if it is a knowledge graph.

I will begin this blog post by defining and introducing a few key terminologies for those of you who are not familiar to Generative AI and LLMs.

# 1. Large Language Models
Large Language Models are both 'large' and also a 'language model'. They are 'large' because they are trained on extensive datasets, encompassing vast amounts of data. The definition of a 'language model' is provided later.

## 1.1. Definitions and Terminologies

> ### 1.1.1. Language Model
> A language model is an neural network that uses the [transformer architecture](https://en.wikipedia.org/wiki/Transformer_(deep_learning_architecture)). It is a statistical model

Examples of Large Language Models include 
- GPT-3.5, [GPT-4o](https://openai.com/index/hello-gpt-4o/) by [OpenAI](https://platform.openai.com/docs/models)
- [Llama3](https://llama.meta.com/llama3/) 8b/13b/70b by MetaAI
- [Claude 3.5 Sonnet](https://www.anthropic.com/news/claude-3-5-sonnet) by Anthrophic
- [Gemma 2 9b/27b](https://blog.google/technology/developers/google-gemma-2/) by Google
- Mixtral-8x7B / Mixtral-8x22B by MistralAI

> ### 1.1.2. Word Embeddings
> A way of representing words as vectors in a multi-dimensional space, where the distance and direction between vectors reflect the similarity and relationships among the corresponding words (IBM, 2024)

Typically, the embedding is represented as a real-valued vector that encodes the meaning of the word in such a way that the words that are closer in the vector space are expected to be similar in meaning.

Methods to generate this mapping include dimensionality reduction (Huffman Coding?), the word co-occurrence matrix or probabilistic models.

> ### 1.1.3. Vectorization  
> To convert a sentence into numerical representations usually decimals via a lookup from a word embedding table.

> ### 1.1.4. Inference Engine
> An inference engine is simply a language model that is hosted on the web using specialized hardware a.k.a Language Processing Units.

Groq is an inference service provider that provides the following language models
- Llama3 70B
- Mixtral8x7b
- Gemma 7B

```python
from langchain_groq import ChatGroq
mixtral8x7b = ChatGroq(model="mixtral-8x7b-32768")
```

> ### 1.1.5. Agent
> An agent is simply a function that chooses a sequence of actions to take. It may contain instances of a Language Model or various other components to help it make decisions based on the inputs it receives.


## 1.2. Understanding the features of LLMs
LLMs are characterized by several key features that determine their performance and application potential. In this section, we'll delve into some of these critical features, including parameter size, context window, and more.

> ### 1.2.1 Parameter Size
> The parameter size of an LLM refers to the number of trainable variables in the model. These parameters are essentially the weights and biases that the model learns during training. The parameter size directly influences the model's ability to learn and generalize from data.

#### Why is it Important?
- **Complexity and Performance**: Larger parameter sizes allow the model to capture more complex patterns in the data, leading to better performance on a wide range of tasks.
- **Resource Requirements**: Models with larger parameter sizes require more computational resources (CPU/GPU) and memory to train and deploy.

**Examples**:
- GPT-3.5: 175 billion parameters
- Llama 3: Available in 8B, 13B, and 70B parameter variants and more recently 200B.
- Claude 3: Haiku 70B and Opus 100B

> ### 1.2.2 Context Window
> The context window refers to the maximum number of tokens (words or characters) that the model can consider at one time when generating or understanding text. It determines how much text the model can use to generate a response or make predictions.

#### Why is it Important?
**Contextual Understanding**: A larger context window allows the model to understand and generate text that is more coherent and contextually relevant.

**Long-Form Content**: Models with larger context windows are better suited for tasks involving long documents, such as summarization or long-form content generation.

**Examples**
- GPT-3.5: 2048 tokens
- Llama 3: 8192 tokens
- Mixtral 8x7b: 32768 tokens


## 1.3. LLM Settings
Large Language Models (LLMs) offer a variety of settings that can be adjusted to influence the behavior and output of the model. Understanding these settings is crucial for tailoring the model's responses to meet specific needs, whether for factual information retrieval or creative text generation. Most of the contents mentioned here can be found in the [Prompt Engineering Guide](https://www.promptingguide.ai/introduction/settings).

> ### 1.3.1 Temperature 
> Temperature is a setting that controls the randomness of the model's output. In essence, it adjusts the likelihood of selecting less probable tokens during generation.

#### How Does it Work?
**Low Temperature**: Results in more deterministic outputs where the model tends to pick the highest probable next token. This is useful for tasks requiring precision and factual correctness, such as question answering.

**High Temperature**: Introduces more randomness, encouraging the model to explore a wider range of possible tokens. This can be beneficial for creative tasks like poem generation or storytelling.

#### Applications
**Fact-Based QA**: Use a lower temperature to ensure concise and accurate responses.
```python
from langchain_openai import ChatOpenAI

model = ChatOpenAI(model="gpt-3.5-turbo", temperature=0, streaming=True)
```

**Creative Writing**: Increase the temperature to allow for more diverse and imaginative outputs.
```python
from langchain_openai import ChatOpenAI

model = ChatOpenAI(model="gpt-3.5-turbo", temperature=0.7, streaming=True)
```

> ### 1.3.2 Top-P Sampling 

## 2. LangChain: The Framework for LLM Applications
LangChain is an LLM application framework. The origins of its name isn't formally known. "Lang" clearly represents Language however "Chain" is quite subjective but if I have to make an educated guess, it could possibly mean the "chaining" or in mathematical terms the composition of multiple functions. 

For example let $P(x)$ be the prompt function and $L(x)$ be the "Language Model". 

A "chain" is simply  $L(P(x))$ 

Alternatively you could also represent a "Chain" as a data pipeline to resemble a singly linked list where data flows in one direction from the input to the output.

```python
from langchain_core.prompts import ChatPromptTemplate

essay_generation_prompt_template = ChatPromptTemplate.from_messages(
    [
        ("system", GENERATOR_PROMPT),
        ("human", "{question}")
    ]
)
```

## 3. LangGraph: The framework to build multi-agent LLM applications
Structuring various LLM agents as a graph structure can improve performance similar to the benefits of having a Graph Database to explore relationships between data. Some examples provided by LangChain