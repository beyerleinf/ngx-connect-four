# ngx-cfb

A simple to use component library for Angular.


## Table of Contents

1. [Links](#links)
2. [Installation & basic usage](#installation-basic-usage)
3. [Full Documentation](#full-documentation)


## Links

[Code Documentation](https://ngx-connect-four.beyerleinf.de/docs/ngx-cfb)
[Changelog]()

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