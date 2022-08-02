import { ThemeState } from 'styles/theme/slice/types'
import { OverlayState } from 'app/components/NavBar/slice/types'
import { UserDataState } from 'data/user/slice/types'
import { CardsFilterState } from 'app/pages/CardsPage/slice/types'
// [IMPORT NEW CONTAINERSTATE ABOVE]

/* Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually */
export interface RootState {
  theme?: ThemeState
  overlay?: OverlayState
  userData?: UserDataState
  cardsFilters?: CardsFilterState
  // [INSERT NEW REDUCER KEY ABOVE]
}
