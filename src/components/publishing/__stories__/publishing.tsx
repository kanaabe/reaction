import { storiesOf } from "@kadira/storybook"
import * as React from "react"

import Artwork from "../artwork"
import IconImageset from "../icons/icon_imageset"
import ImagesetPreview from "../imageset_preview"

storiesOf("Publishing", Artwork)
  .add("Artwork", () => {
    return (
      <div style={{width: 400}}>
        <Artwork linked artwork={images[0]}/>
      </div>
    )
  })
  .add("Imageset Preview", () => {
    return <ImagesetPreview images={images}/>
  })
  .add("Icons", () => {
    return (
      <div style={{width: 50}}>
        <IconImageset />
        <p>Imageset</p>
      </div>
    )
  })

const images = [
  {
    type: "artwork",
    id: "589a6291275b2410d1beb6a5",
    slug: "fernando-botero-nude-on-the-beach",
    date: "2000",
    title: "Nude on the Beach",
    image: "https://d32dm0rphc51dk.cloudfront.net/0aRUvnVgQKbQk5dj8xcCAg/larger.jpg",
    partner: {
      name: "Gary Nader",
      slug: "gary-nader",
    },
    artists: [
      {
        name: "Fernando Botero",
        slug: "fernando-botero",
      },
    ],
    artist: {
      name: "Fernando Botero",
      slug: "fernando-botero",
    },
    width: 1152,
    height: 826,
  },
  {
    url: "https://artsy-media-uploads.s3.amazonaws.com/co8j2xq40ROMyBrJQm_4eQ%2FDafenOilPaintingVillage_AK03.jpg",
    type: "image",
    width: 900,
    height: 1200,
    caption: "<p>Photo by Adam Kuehl for Artsy.</p>",
  },
]
