/* eslint-disable @typescript-eslint/no-inferrable-types */
/** @jsxImportSource sigl */
import $ from 'sigl'

import { MidiOp } from 'webaudio-tools'

const MidiOps = new Set(Object.values(MidiOp))

export interface MidiVisualizerElement extends $.Element<MidiVisualizerElement> {}

@$.element()
export class MidiVisualizerElement extends HTMLElement {
  midiEvents: WebMidi.MIDIMessageEvent[] = []
  timeLength: number = 1

  rects = $(this).reduce(({ midiEvents, timeLength }) => {
    const events: WebMidi.MIDIMessageEvent[] = midiEvents.filter(x => MidiOps.has(x.data[0]))
    const minNote = Math.min(...midiEvents.map(x => x.data[1]))
    const maxNote = Math.max(...midiEvents.map(x => x.data[1]))

    const heightScale = (maxNote - minNote)
    const fullTime = timeLength * 1000

    const width = 100 / timeLength
    const height = 100 / (heightScale + 1)

    const noteOns = events.filter(x => x.data[0] === MidiOp.NoteOn)
    const noteOffs = events.filter(x => x.data[0] === MidiOp.NoteOff)

    const rects = noteOns.map(x =>
      [
        new $.Rect(
          (x.receivedTime / 1000) * width,
          (x.data[1] - minNote) * height,
          (((noteOffs.find(y => (y.receivedTime >= x.receivedTime))?.receivedTime ?? fullTime)
            - x.receivedTime) / 1000) * width,
          height
        ),
        x.data[2],
      ] as readonly [$.Rect, number]
    )

    return rects
  })

  mounted($: MidiVisualizerElement['$']) {
    $.render(({ rects }) => (
      <>
        <style>
          {/*css*/ `
          :host {
            contain: size layout style paint;
            --note-color: #666;
            display: inline-flex;
          }
          [part=svg] {
            z-index: -1;
            width: 100%;
            height: 100%;
            shape-rendering: optimizeSpeed;
          }
          [part=note] {
            shape-rendering: optimizeSpeed;
            fill: var(--note-color);
          }
          `}
        </style>
        <svg part="svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          {rects.map(([rect, vel]) => (
            <rect
              part="note"
              {...rect.toJSON()}
              opacity={((vel / 127) ** 0.3) * 0.9 + 0.1}
            />
          ))}
        </svg>
      </>
    ))
  }
}
