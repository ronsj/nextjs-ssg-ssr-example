import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

export default function CoverImage({ title, src, slug, height, width, baseDir }) {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm', {
        'hover:shadow-md transition-shadow duration-200': slug,
      })}
      layout="responsive"
      width={width}
      height={height}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/${baseDir}/${slug}`} href={`/${baseDir}/[slug]`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
