<h1>
midi-visualizer <a href="https://npmjs.org/package/midi-visualizer"><img src="https://img.shields.io/badge/npm-v0.0.1-F00.svg?colorA=000"/></a> <a href="src"><img src="https://img.shields.io/badge/loc-68-FFF.svg?colorA=000"/></a> <a href="https://cdn.jsdelivr.net/npm/midi-visualizer@0.0.1/dist/midi-visualizer.min.js"><img src="https://img.shields.io/badge/brotli-16K-333.svg?colorA=000"/></a> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-F0B.svg?colorA=000"/></a>
</h1>

<p></p>

Visualize a set of MIDI events as a piano roll.

<h4>
<table><tr><td title="Triple click to select and copy paste">
<code>npm i midi-visualizer </code>
</td><td title="Triple click to select and copy paste">
<code>pnpm add midi-visualizer </code>
</td><td title="Triple click to select and copy paste">
<code>yarn add midi-visualizer</code>
</td></tr></table>
</h4>

## Examples

<details id="example$web" title="web" open><summary><span><a href="#example$web">#</a></span>  <code><strong>web</strong></code></summary>  <ul>    <details id="source$web" title="web source code" ><summary><span><a href="#source$web">#</a></span>  <code><strong>view source</strong></code></summary>  <a href="example/web.tsx">example/web.tsx</a>  <p>

```tsx
/** @jsxImportSource sigl */
import $ from 'sigl'

import { MidiVisualizerElement } from 'midi-visualizer'
import { createMidiNoteEvents } from 'webaudio-tools'

const midiEvents = [
  midi - visualizer.createMidiNoteEvents(0, 30, 127, 0.1),
  midi - visualizer.createMidiNoteEvents(0.25, 35, 107, 0.1),
  midi - visualizer.createMidiNoteEvents(0.5, 40, 127, 0.1),
  midi - visualizer.createMidiNoteEvents(0.75, 37, 95, 0.1),
]

const MidiVisualizer = $.element(MidiVisualizerElement)

$.render(
  <MidiVisualizer
    style="width:400px;height:100px;overflow:hidden;resize:both;"
    midiEvents={midiEvents}
  />,
  document.body
)
```

</p>
</details></ul></details>

## API

<p>  <details id="MidiVisualizerElement$1" title="Class" open><summary><span><a href="#MidiVisualizerElement$1">#</a></span>  <code><strong>MidiVisualizerElement</strong></code>    </summary>  <a href="src/midi-visualizer.tsx#L12">src/midi-visualizer.tsx#L12</a>  <ul>        <p>  <details id="constructor$2" title="Constructor" ><summary><span><a href="#constructor$2">#</a></span>  <code><strong>constructor</strong></code><em>()</em>    </summary>    <ul>    <p>  <details id="new MidiVisualizerElement$3" title="ConstructorSignature" ><summary><span><a href="#new MidiVisualizerElement$3">#</a></span>  <code><strong>new MidiVisualizerElement</strong></code><em>()</em>    </summary>    <ul><p><a href="#MidiVisualizerElement$1">MidiVisualizerElement</a></p>        </ul></details></p>    </ul></details><details id="midiEvents$4" title="Property" ><summary><span><a href="#midiEvents$4">#</a></span>  <code><strong>midiEvents</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>[]</code></span>  </summary>  <a href="src/midi-visualizer.tsx#L13">src/midi-visualizer.tsx#L13</a>  <ul><p><span>MIDIMessageEvent</span>  []</p>        </ul></details><details id="onmounted$19" title="Property" ><summary><span><a href="#onmounted$19">#</a></span>  <code><strong>onmounted</strong></code>    </summary>    <ul><p><span>EventHandler</span>&lt;<a href="#MidiVisualizerElement$1">MidiVisualizerElement</a>, <span>CustomEvent</span>&lt;any&gt;&gt;</p>        </ul></details><details id="onunmounted$20" title="Property" ><summary><span><a href="#onunmounted$20">#</a></span>  <code><strong>onunmounted</strong></code>    </summary>    <ul><p><span>EventHandler</span>&lt;<a href="#MidiVisualizerElement$1">MidiVisualizerElement</a>, <span>CustomEvent</span>&lt;any&gt;&gt;</p>        </ul></details><details id="rects$6" title="Property" ><summary><span><a href="#rects$6">#</a></span>  <code><strong>rects</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>...</code></span>  </summary>  <a href="src/midi-visualizer.tsx#L16">src/midi-visualizer.tsx#L16</a>  <ul><p>readonly     [  <span>Rect</span>, number  ]  []</p>        </ul></details><details id="timeLength$5" title="Property" ><summary><span><a href="#timeLength$5">#</a></span>  <code><strong>timeLength</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>1</code></span>  </summary>  <a href="src/midi-visualizer.tsx#L14">src/midi-visualizer.tsx#L14</a>  <ul><p>number</p>        </ul></details><details id="mounted$7" title="Method" ><summary><span><a href="#mounted$7">#</a></span>  <code><strong>mounted</strong></code><em>($)</em>    </summary>  <a href="src/midi-visualizer.tsx#L46">src/midi-visualizer.tsx#L46</a>  <ul>    <p>    <details id="$$9" title="Parameter" ><summary><span><a href="#$$9">#</a></span>  <code><strong>$</strong></code>    </summary>    <ul><p><span>Context</span>&lt;<a href="#MidiVisualizerElement$1">MidiVisualizerElement</a> &amp; <span>JsxContext</span>&lt;<a href="#MidiVisualizerElement$1">MidiVisualizerElement</a>&gt; &amp; <span>Omit</span>&lt;{<p>    <details id="ctor$13" title="Parameter" ><summary><span><a href="#ctor$13">#</a></span>  <code><strong>ctor</strong></code>    </summary>    <ul><p><span>Class</span>&lt;<a href="#T$12">T</a>&gt;</p>        </ul></details>  <p><strong></strong>&lt;<span>T</span>&gt;<em>(ctor)</em>  &nbsp;=&gt;  <ul><span>CleanClass</span>&lt;<a href="#T$12">T</a>&gt;</ul></p>  <details id="ctx$17" title="Parameter" ><summary><span><a href="#ctx$17">#</a></span>  <code><strong>ctx</strong></code>    </summary>    <ul><p><a href="#T$16">T</a> | <span>Class</span>&lt;<a href="#T$16">T</a>&gt;</p>        </ul></details>  <p><strong></strong>&lt;<span>T</span>&gt;<em>(ctx)</em>  &nbsp;=&gt;  <ul><span>Wrapper</span>&lt;<a href="#T$16">T</a>&gt;</ul></p></p>} &amp; <span>__module</span> &amp; {}, <code>"transition"</code>&gt;&gt;</p>        </ul></details>  <p><strong>mounted</strong><em>($)</em>  &nbsp;=&gt;  <ul>void</ul></p></p>    </ul></details></p></ul></details></p>

## Credits

- [sigl](https://npmjs.org/package/sigl) by [stagas](https://github.com/stagas) &ndash; Web framework

## Contributing

[Fork](https://github.com/stagas/midi-visualizer/fork) or [edit](https://github.dev/stagas/midi-visualizer) and submit a PR.

All contributions are welcome!

## License

<a href="LICENSE">MIT</a> &copy; 2022 [stagas](https://github.com/stagas)
