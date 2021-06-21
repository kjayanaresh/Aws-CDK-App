#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsCdkAppStack } from '../lib/aws-cdk-app-stack';
import { Stack } from '@aws-cdk/core';
import { EcsStack } from '../lib/EcsConstruct/EcsStack';

const app = new cdk.App();
new AwsCdkAppStack(app, 'AwsCdkAppStack', {});

new EcsStack(app, "EcsCdkApp", {})
