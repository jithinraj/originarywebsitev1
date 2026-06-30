'use client'

import { useState } from 'react'
import { PALETTE } from '../home/palette'
import { MONO } from '../home/typography'
import {
  RecordCard,
  CodeBlock,
  Terminal,
  StepLabel,
  SpecimenGrid,
  SpecimenIntro,
  type RecordRow,
} from './parts'

/**
 * Interactive specimen: a verified record the reader can "tamper" with. Flipping
 * one byte switches the badge to `tampered` and the terminal to E_INVALID_SIGNATURE.
 * Demonstrates that a failed check is itself evidence. Demo signature only.
 */
export function TamperDemo({
  eyebrow,
  title,
  answers,
  command,
  recordType,
  rows,
  foot,
  payload,
}: {
  eyebrow: string
  title: string
  answers: string
  command: string
  recordType: string
  rows: RecordRow[]
  foot: string
  payload: string
}) {
  const [tampered, setTampered] = useState(false)

  return (
    <SpecimenGrid>
      <div>
        <SpecimenIntro eyebrow={eyebrow} title={title} answers={answers} />
        <StepLabel>Verify it</StepLabel>
        <CodeBlock>{command}</CodeBlock>
        <StepLabel>{tampered ? 'Result after one flipped byte' : 'Expected'}</StepLabel>
        <Terminal
          lines={
            tampered
              ? [
                  { kind: 'err', text: 'E_INVALID_SIGNATURE' },
                  { kind: 'out', text: 'one byte changed - the record no longer verifies' },
                ]
              : [{ kind: 'ok', text: 'Signature valid (offline)' }]
          }
        />
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginTop: 18 }}>
          <button
            type="button"
            className="tamper-btn"
            aria-pressed={tampered}
            onClick={() => setTampered((t) => !t)}
          >
            {tampered ? 'Restore the record' : 'Tamper with this record'}
          </button>
          <span style={{ fontFamily: MONO, fontSize: 12, color: PALETTE.faint, maxWidth: '34ch' }}>
            Flip one byte and verification fails. A failed check is also evidence.
          </span>
        </div>
      </div>

      <div>
        <RecordCard
          type={recordType}
          badge={
            tampered
              ? { kind: 'invalid', label: 'tampered' }
              : { kind: 'verified', label: 'verified offline' }
          }
          rows={rows}
          foot={foot}
          style={tampered ? { borderColor: 'rgba(154,59,46,0.45)' } : {}}
        />
        <StepLabel>Decoded payload</StepLabel>
        <CodeBlock>{payload}</CodeBlock>
      </div>
    </SpecimenGrid>
  )
}
