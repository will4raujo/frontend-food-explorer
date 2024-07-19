import ReactLoading from 'react-loading'

export function Loading({height, width}) {
  return (
    <ReactLoading type='cylon' color='hsla(39,100%,97%,1)' height={height} width={width}/>
  )
}