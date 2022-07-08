import * as React from 'react'
import { Group } from 'data/card/cards'

interface SvgProps {
  width?: string
  height?: string
}

interface Props extends SvgProps {
  group: Group
}

const SvgAll = ({ width, height }: SvgProps) => (
  <svg width={width} height={height} viewBox="0 0 512 512">
    <circle cx="256" cy="256" r="212" />
  </svg>
)

const SvgSuit = ({ width, height }: SvgProps) => (
  <svg width={width} height={height} viewBox="0 0 512 512">
    <path
      d="M437.02,74.98C388.667,26.628,324.381,0,256,0C187.62,0,123.333,26.628,74.98,74.98C26.628,123.333,0,187.62,0,256
			s26.628,132.667,74.98,181.02C123.333,485.372,187.62,512,256,512c68.381,0,132.667-26.628,181.02-74.98
			C485.372,388.667,512,324.38,512,256S485.372,123.333,437.02,74.98z M256,478.609c-122.746,0-222.609-99.862-222.609-222.609
			S133.254,33.391,256,33.391S478.609,133.254,478.609,256S378.746,478.609,256,478.609z"
    />
    <circle cx="210" cy="200" r="40" />
    <circle cx="330" cy="190" r="40" />
    <circle cx="190" cy="330" r="40" />
    <circle cx="310" cy="320" r="40" />
  </svg>
)

const SvgExp = ({ width, height }: SvgProps) => (
  <svg width={width} height={height} viewBox="0 0 512 512">
    <path
      d="M256,0C114.842,0,0,114.842,0,256s114.842,256,256,256s256-114.842,256-256S397.16,0,256,0z M256,429.332
				c-95.575,0-173.332-77.757-173.332-173.332S160.425,82.668,256,82.668S429.332,160.425,429.332,256S351.575,429.332,256,429.332z
				"
    />
    <circle cx="206" cy="206" r="58" />
    <circle cx="196" cy="316" r="23" />
    <circle cx="306" cy="306" r="58" />
    <circle cx="316" cy="196" r="23" />
  </svg>
)

export const IconToggleGroup = ({ group, width, height }: Props) => (
  <>
    {group === Group.All && <SvgAll width={width} height={height} />}
    {group === Group.Suit && <SvgSuit width={width} height={height} />}
    {group === Group.Exp && <SvgExp width={width} height={height} />}
  </>
)
