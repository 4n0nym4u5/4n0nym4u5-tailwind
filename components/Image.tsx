import NextImage, { ImageProps } from 'next/image'
const Image = ({ src, ...rest }: ImageProps) => (
  <NextImage src={`/4n0nym4u5-tailwind${src}`} {...rest} />
)
export default Image
