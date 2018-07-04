# ngx-cfb

A simple to use Angular component library for Connect Four.

![Maintenance](https://img.shields.io/maintenance/yes/2018.svg?style=flat-square) [![license](https://img.shields.io/github/license/beyerleinf/ngx-connect-four.svg?style=flat-square)](https://github.com/beyerleinf/ngx-connect-four/blob/master/LICENSE.md) ![npm (scoped)](https://img.shields.io/npm/v/@beyerleinf/ngx-cfb.svg?style=flat-square)

![Travis](https://img.shields.io/travis/beyerleinf/ngx-connect-four.svg?style=flat-square) [![codecov](https://codecov.io/gh/beyerleinf/ngx-connect-four/branch/master/graph/badge.svg)](https://codecov.io/gh/beyerleinf/ngx-connect-four) [![dependencies Status](https://david-dm.org/beyerleinf/ngx-connect-four/status.svg)](https://david-dm.org/beyerleinf/ngx-connect-four) [![devDependencies Status](https://david-dm.org/beyerleinf/ngx-connect-four/dev-status.svg)](https://david-dm.org/beyerleinf/ngx-connect-four?type=dev) [![Known Vulnerabilities](https://snyk.io/test/github/beyerleinf/ngx-connect-four/badge.svg)](https://snyk.io/test/github/beyerleinf/ngx-connect-four)

[![GitHub commit activity the past week, 4 weeks, year](https://img.shields.io/github/commit-activity/y/beyerleinf/ngx-connect-four.svg)]() [![GitHub last commit](https://img.shields.io/github/last-commit/beyerleinf/ngx-connect-four.svg)]() [![GitHub issues](https://img.shields.io/github/issues/beyerleinf/ngx-connect-four.svg?style=flat-square)](https://github.com/beyerleinf/ngx-connect-four/issues) [![GitHub pull requests](https://img.shields.io/github/issues-pr/beyerleinf/ngx-connect-four.svg?style=flat-square)](https://github.com/beyerleinf/ngx-connect-four/pulls) [![Greenkeeper badge](https://badges.greenkeeper.io/beyerleinf/ngx-connect-four.svg)](https://greenkeeper.io/) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/beyerleinf/ngx-connect-four.svg?style=flat-square)

## Table of Contents

1. [Links](#links)
2. [Installation & basic usage](#installation-basic-usage)
3. [Full Documentation](#full-documentation)

## Links

1. [Code Documentation](https://ngx-connect-four.beyerleinf.de/docs/ngx-cfb)
2. [Changelog](https://github.com/beyerleinf/ngx-connect-four/blob/master/CHANGELOG.md)

## Installation & basic usage

You can install `ngx-cfb` via  `npm`:

``` sh
npm install --save @beyerleinf/ngx-cfb
```

Import the Module somewhere:

``` typescript
import { ConnectFourBoardModule } from '@beyerleinf/ngx-cfb';

@NgModule({
  ...
  imports: [ConnectFourBoardModule, ...]
  ...
})
```

Add the component:

``` typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  board = [[1, 0, 2], [0, 0, 0]];
}

```

``` html
<cfb-board [board]="board"></cfb-board>
```

## Full Documentation

You can check out the complete (auto-generated) documentation [here](https://ngx-connect-four.beyerleinf.de/docs/ngx-cfb)
