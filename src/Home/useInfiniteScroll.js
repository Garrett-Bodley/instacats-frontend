import { useState, useCallback, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPicsByPageNum } from '../Utilities/Actions/picActions'

const useInfiniteScroll = () => {

  const loading = useSelector(state => state.loading)
  const [pageNum, setPageNum] = useState(1)

  const dispatch = useDispatch()
  const observer = useRef()

  const lastCardRef = useCallback(node => {
    if(loading) return;
    if(observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver( (entries) => {
      if(entries[0].isIntersecting){ setPageNum(prevNum => prevNum + 1) }
    });
    if(node) observer.current.observe(node)
  }, [loading])

  useEffect(() => {
    dispatch(getPicsByPageNum(pageNum));
  }, [pageNum, dispatch])

  return { lastCardRef, loading }
}

export default useInfiniteScroll