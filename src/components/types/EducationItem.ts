export interface EducationItem {
  date: string
  badge: string
  current: boolean
  school: string
  schoolNative: string
  field: string
  titleMain: string
  titleNative: string
  /** Logo image URL. Falls back to `abbr` monogram when missing or it fails to load. */
  logo?: string
  /** Short monogram shown when no logo image is available (e.g. "UEK"). */
  abbr: string
}
