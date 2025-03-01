---
title: "RDB Transformer configuration reference"
date: "2022-04-04"
sidebar_position: 40
---

The configuration reference in this page is written for RDB Transformer 4.0.0

The configuration reference pages for previous versions can be found [here](/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/rdb-transformer-configuration-reference/rdb-transformer-previous-versions/index.md).

An example of the minimal required config for the Spark transformer can be found [here](https://github.com/snowplow/snowplow-rdb-loader/blob/master/config/transformer.batch.config.minimal.hocon) and a more detailed one [here](https://github.com/snowplow/snowplow-rdb-loader/blob/master/config/transformer.batch.config.reference.hocon).

An example of the minimal required config for the stream transformer can be found [here](https://github.com/snowplow/snowplow-rdb-loader/blob/master/config/transformer.kinesis.config.minimal.hocon) and a more detailed one [here](https://github.com/snowplow/snowplow-rdb-loader/blob/master/config/transformer.kinesis.config.reference.hocon).

This is a complete list of the options that can be configured:

## **Spark transformer only**

|  |  |
| --- | --- |
| `input` | Required. S3 URI of the enriched archive. It must be populated separately with `run=YYYY-MM-DD-hh-mm-ss` directories. |
| `runInterval.*` | Specifies interval to process. |
| `runInterval.sinceTimestamp` | Optional. Start processing after this timestamp. |
| `runInterval.sinceAge` | Optional. A duration that specifies the maximum age of folders that should get processed. If `sinceAge` and `sinceTimestamp` are both specified, then the latest value of the two determines the earliest folder that will be processed. |
| `runInterval.until` | Optional. Process until this timestamp. |
| `monitoring.sentry.dsn` | Optional. For tracking runtime exceptions. |

## **Stream transformer only**

|  |  |
| --- | --- |
| `input.type` | Optional. The only supported values are `kinesis` and `file`. The default is `kinesis` |
| `input.appName` | Optional. KCL app name. The default is `snowplow-rdb-transformer`. |
| `input.streamName` | Required for `kinesis`. Enriched Kinesis stream name. |
| `input.region` | AWS region of the Kinesis stream. Optional if it can be resolved with [AWS region provider chain](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/regions/providers/DefaultAwsRegionProviderChain.html). |
| `input.position` | Optional. Kinesis position: `LATEST` or `TRIM_HORIZON`. The default is `LATEST`. |
| `windowing` | Optional. Frequency to emit shredding complete message. The default is `10 minutes`. |
| `monitoring.metrics.*` | Send metrics to a StatsD server or stdout. |
| `monitoring.metrics.statsd.*` | Optional. For sending metrics (good and bad event counts) to a StatsD server. |
| `monitoring.metrics.statsd.hostname` | Required if `monitoring.metrics.statsd` section is configured. The host name of the StatsD server. |
| `monitoring.metrics.statsd.port` | Required if `monitoring.metrics.statsd` section is configured. Port of the StatsD server. |
| `monitoring.metrics.statsd.tags` | Optional. Tags which are used to annotate the StatsD metric with any contextual information. |
| `monitoring.metrics.statsd.prefix` | Optional. Configures the prefix of StatsD metric names. The default is `snoplow.transformer`. |
| `monitoring.metrics.stdout.*` | Optional. For sending metrics to stdout. |
| `monitoring.metrics.stdout.prefix` | Optional. Overrides the default metric prefix. |

## **Common settings**

|  |  |
| --- | --- |
| `output.path` | Required. S3 URI of the transformed output. |
| `output.compression` | Optional. One of `NONE` or `GZIP`. The default is `GZIP`. |
| `output.region` | AWS region of the S3 bucket. Optional if it can be resolved with [AWS region provider chain](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/regions/providers/DefaultAwsRegionProviderChain.html). |
| `queue.type` | Required. Type of the message queue. Can be either `sqs` or `sns`. |
| `queue.queueName` | Required if queue type is `sqs`. Name of the SQS queue. |
| `queue.topicArn` | Required if queue type is `sns`. ARN of the SNS topic. |
| `queue.region` | AWS region of the SQS queue or SNS topic. Optional if it can be resolved with [AWS region provider chain](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/regions/providers/DefaultAwsRegionProviderChain.html). |
| `formats.*` | Schema-specific format settings. |
| `formats.transformationType` | Required. Type of transformation, either `shred` or `widerow`. See [Shredded data](/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/index.md#shredded-data) and [Wide row format](/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/index.md#wide-row-format). |
| `formats.fileFormat` | Optional. The default is `JSON`. Output file format produced when transformation is `widerow`. Either `JSON` or `PARQUET`. |
| `formats.default` | Optional. The default is `TSV`. Data format produced by default when transformation is `shred`. Either `TSV` or `JSON`. `TSV` is recommended as it enables table autocreation, but requires an Iglu Server to be available with known schemas (including Snowplow schemas). `JSON` does not require an Iglu Server, but requires Redshift JSONPaths to be configured and does not support table autocreation. |
| `formats.tsv` | Optional. List of Iglu URIs, but can be set to empty list `[]` which is the default. If `default` is set to `JSON` this list of schemas will still be shredded into `TSV`. |
| `formats.json` | Optional. List of Iglu URIs, but can be set to empty list `[]` which is the default. If `default` is set to `TSV` this list of schemas will still be shredded into `JSON`. |
| `formats.skip` | Optional. List of Iglu URIs, but can be set to empty list `[]` which is the default. Schemas for which loading can be skipped. |
| `validations.*` | Optional. Criteria to validate events against. |
| `validations.minimumTimestamp` | This is currently the only validation criterion. It checks that all timestamps in the event are older than a specific point in time, eg `2021-11-18T11:00:00.00Z`. |
| `featureFlags.*` | Optional. Enable features that are still in beta, or which aim to enable smoother upgrades. |
| `featureFlags.legacyMessageFormat` | This currently the only feature flag. Setting this to `true` allows you to use a new version of the transformer with an older version of the loader. |

## **Deduplication (Spark transformer only)**

The below settings exist for the purposes of benchmarking only and we strongly discourage changing the preset defaults:

|  |  |
| --- | --- |
| `deduplication.synthetic.type` | Can be `NONE` (disable), `BROADCAST` (default) and `JOIN` (different low-level implementations). |
| `deduplication.synthetic.cardinality` | Do not deduplicate pairs with less-or-equal cardinality. The default is 1. |
