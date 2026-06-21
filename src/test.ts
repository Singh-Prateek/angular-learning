// Setup Angular testing environment for unit tests with Vitest/Jest.
// This file is loaded automatically by the Angular CLI test builder.

import { getTestBed, TestEnvironmentOptions } from '@angular/core/testing';

import { BrowserTestingModule, platformBrowserTesting } from '@angular/platform-browser/testing';

// Initialize the Angular testing environment.
const options: TestEnvironmentOptions = {
  teardown: { destroyAfterEach: true },
};

getTestBed().initTestEnvironment(
  BrowserTestingModule,
  platformBrowserTesting(),
  options
);
