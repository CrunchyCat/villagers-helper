import { Helmet } from 'react-helmet-async'
import { NavBar } from 'app/components/Overlay/components/NavBar'
import { VillagersCardsViewer } from 'app/components/VillagersCardsViewer'
import { useDispatch, useSelector } from 'react-redux'
import { useCardsFiltersSlice } from 'app/pages/CardsPage/slice'
import { selectCardsFilters } from 'app/pages/CardsPage/slice/selectors'

export const CardsPage = () => {
  const filters = useSelector(selectCardsFilters)
  const { actions } = useCardsFiltersSlice()
  const dispatch = useDispatch()

  return (
    <>
      <Helmet>
        <title>cards</title>
        <meta name="description" content="cards" />
      </Helmet>
      <NavBar
        title="cards"
        btnSearch={() =>
          dispatch(actions.setViewbarHidden(!filters.hideViewbar))
        }
      />
      <VillagersCardsViewer />
    </>
  )
}
