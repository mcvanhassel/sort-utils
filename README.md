# Generic Array Sort Utilities for TypeScript

[![GitHub](https://img.shields.io/github/license/mcvanhassel/sort-utils)](LICENSE)
[![Travis (.org)](https://img.shields.io/travis/mcvanhassel/sort-utils)](https://travis-ci.org/github/mcvanhassel/sort-utils)
[![Codecov](https://img.shields.io/codecov/c/github/mcvanhassel/sort-utils)](https://codecov.io/gh/mcvanhassel/sort-utils)
[![Depfu](https://img.shields.io/depfu/mcvanhassel/sort-utils)](https://depfu.com/repos/github/mcvanhassel/sort-utils)
[![Known Vulnerabilities](https://snyk.io/test/github/mcvanhassel/sort-utils/badge.svg?targetFile=package.json)](https://snyk.io/test/github/mcvanhassel/sort-utils?targetFile=package.json)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=mcvanhassel_sort-utils&metric=alert_status)](https://sonarcloud.io/dashboard?id=mcvanhassel_sort-utils)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=mcvanhassel_sort-utils&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=mcvanhassel_sort-utils)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=mcvanhassel_sort-utils&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=mcvanhassel_sort-utils)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=mcvanhassel_sort-utils&metric=security_rating)](https://sonarcloud.io/dashboard?id=mcvanhassel_sort-utils)

[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=mcvanhassel_sort-utils&metric=ncloc)](https://sonarcloud.io/dashboard?id=mcvanhassel_sort-utils)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=mcvanhassel_sort-utils&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=mcvanhassel_sort-utils)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=mcvanhassel_sort-utils&metric=bugs)](https://sonarcloud.io/dashboard?id=mcvanhassel_sort-utils)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=mcvanhassel_sort-utils&metric=code_smells)](https://sonarcloud.io/dashboard?id=mcvanhassel_sort-utils)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=mcvanhassel_sort-utils&metric=sqale_index)](https://sonarcloud.io/dashboard?id=mcvanhassel_sort-utils)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=mcvanhassel_sort-utils&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=mcvanhassel_sort-utils)

## Overview

Generic type-safe array sorting utility functions for TypeScript projects

## Usage

### Sort Ascending

```typescript
const sortedItems = sortAscending(['è', 'c', 'é', 'e', 'a', 'd', 'b']);
// ['a', 'b', 'c', 'd', 'e', 'é', 'è']
```

```typescript
of([1, 10, 5]).pipe(map(sortAscending)).subscribe();
// [1, 5, 10]
```

### Sort Descending

```typescript
const sortedItems = sortDescending(['è', 'c', 'é', 'e', 'a', 'd', 'b']);
// ['è', 'é', 'e', 'd', 'c', 'b', 'a']
```

```typescript
of([false, true, false, true]).pipe(map(sortDescending)).subscribe();
// [true, true, false, false]
```

### Sort Ascending By Property

```typescript
const items: Item[] = [
  { id: 2, title: 'a' },
  { id: 1, title: 'b' },
];
const sortedItems = sortAscendingBy('id')(items);
// [{ id: 1, title: 'b' }, { id: 2, title: 'a' }]
```

```typescript
of([
  { id: 2, title: 'a' },
  { id: 1, title: 'b' },
])
  .pipe(map(sortAscendingBy('title')))
  .subscribe();
// [{ id: 2, title: 'a' }, { id: 1, title: 'b' }]
```

### Sort Descending By Property

```typescript
const items: Item[] = [
  { id: 2, title: 'a' },
  { id: 1, title: 'b' },
];
const sortedItems = sortDescendingBy('id')(items);
// [{ id: 2, title: 'a' }, { id: 1, title: 'b' }]
```

```typescript
of([
  { id: 2, title: 'a' },
  { id: 1, title: 'b' },
])
  .pipe(map(sortDescendingBy('title')))
  .subscribe();
// [{ id: 1, title: 'b' }, { id: 2, title: 'a' }]
```
