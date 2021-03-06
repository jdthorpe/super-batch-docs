# SuperBatch

_The fastest way to get up and running with Azure Batch_

## TL;DR

Azure Batch can speed up your long running jobs by orders of magnitude, but
converting your code to run in Azure Batch requires a bit of configuration.
This package aims to get you up and running in minutes, and institutes some
best practices too.

## Azure Batch

If you have a long running script that can be divided into independent tasks,
Azure Batch can orchestrate the execution of those tasks a pool of 100's of
worker nodes (VMs) -- reducing your execution time by orders of magnitude.
However, to leverage azure batch, you'll need to:

* Create some Azure resources including:
  * An Azure Batch Account with at least one node pool
  * An Azure Storage Account
  * An Azure Container Registry (Optional)
* Bundle your worker code with it's dependencies and store it in the cloud
* Store your input (*Resource*) files in the cloud
* Define the Individual tasks and upload them to Azure Batch
* Download the results from each task
* Aggregate the task results to and produce your final output

If this sounds intimidating, this package is here to help you get to your
python - _or any other code_ - up and running in Azure Batch with as little
pain as possible.

## Requirements

In order to leverage Azure Batch using SuperBatch, you'll need:

* The [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest) installed in order to interact with the Azure cloud
* The [Docker CLI](https://docs.docker.com/install/) installed in order to bundle your code and push it to a registry.
* The SuperBatch package, which can be installed via:

```shell
pip install git+https://github.com/jdthorpe/batch-config.git
```

## Getting Started

Follow along in the tutorial, or clone the
[super-batch-starter](https://github.com/jdthorpe/super-batch-starter) and
replace the starter code with yours
