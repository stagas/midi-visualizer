/** @jsxImportSource sigl */
import $ from 'sigl'

import { createMidiNoteEvents } from 'webaudio-tools'
import { MidiVisualizerElement } from '../src'

const midiEvents = [
  ...createMidiNoteEvents(0, 30, 127, 0.1),
  ...createMidiNoteEvents(0.25, 35, 107, 0.1),
  ...createMidiNoteEvents(0.5, 40, 127, 0.1),
  ...createMidiNoteEvents(0.75, 37, 95, 0.1),
]

const MidiVisualizer = $.element(MidiVisualizerElement)

$.render(
  <MidiVisualizer
    style="width:400px;height:100px;overflow:hidden;resize:both;"
    midiEvents={midiEvents}
  />,
  document.body
)
