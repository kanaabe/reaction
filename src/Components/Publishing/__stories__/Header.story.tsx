import { storiesOf } from "@storybook/react"
import _ from "lodash"
import React from "react"
import { HeroSections } from "../Fixtures/Components"
import { Header } from "../Header/Header"

import {
  BasicArticle,
  ClassicArticle,
  FeatureArticle,
  MissingVerticalStandardArticle,
  StandardArticle,
  SuperArticle
} from "../Fixtures/Articles"

storiesOf("Publishing/Headers", module)
  .add("Classic Header", () => {
    return (
      <div>
        <div style={{ width: "100%", height: "400px", position: "relative" }}>
          <Header article={ClassicArticle} />
        </div>
        <div style={{ width: "100%", height: "400px", position: "relative" }}>
          <Header article={ClassicArticle}>
            <div>Child 0: Title</div>
            <p>Child 1: Lead Paragraph</p>
          </Header>
        </div>
      </div>
    )
  })
  .add("Standard Header", () => {
    return (
      <div>
        <div style={{ width: "100%", height: "400px", position: "relative" }}>
          <Header article={StandardArticle} />
        </div>
        <div style={{ width: "100%", height: "400px", position: "relative" }}>
          <Header article={MissingVerticalStandardArticle}>
            <div>Child 0: Vertical</div>
            <div>Child 1: Title</div>
          </Header>
        </div>
      </div>
    )
  })
  .add("Feature Header - Basic, without Embed", () => {
    const article = _.clone(BasicArticle)
    article.hero_section.url = null

    return (
      <div>
        <div style={{ width: "100%", position: "relative" }}>
          <Header
            article={BasicArticle} />
        </div>
      </div>
    )
  })
  .add("Feature Header - Basic, with Embed", () => {
    const article = _.clone(BasicArticle)
    article.hero_section.url = 'https://vimeo.com/238843720'

    return (
      <div>
        <div style={{ width: "100%", position: "relative" }}>
          <Header
            article={BasicArticle} />
        </div>
      </div>
    )
  })
  .add("Feature Header - Text", () => {
    const article = _.extend({}, FeatureArticle, { hero_section: HeroSections[0] })
    const article2 = _.extend({}, FeatureArticle, { hero_section: HeroSections[5] })
    return (
      <div>
        <div style={{ width: "100%", position: "relative" }}>
          <Header article={article} />
        </div>
        <div style={{ width: "100%", position: "relative" }}>
          <Header article={article2} />
        </div>
        <div style={{ width: "100%", position: "relative" }}>
          <Header article={article2}>
            <div>Child 0: Vertical</div>
            <div>Child 1: Title</div>
            <div>Child 2: Deck</div>
            <div>Child 3: Image</div>
          </Header>
        </div>
      </div>
    )
  })
  .add("Feature Header - Split", () => {
    const article = _.extend({}, FeatureArticle, { hero_section: HeroSections[1] })
    const article2 = _.extend({}, FeatureArticle, { hero_section: HeroSections[3] })
    return (
      <div>
        <div style={{ width: "100%", height: "100vh", position: "relative" }}>
          <div style={{ width: "100%", height: "50px", backgroundColor: "black" }} />
          <Header article={article} height="calc(100vh - 50px)" />
        </div>
        <div style={{ width: "100%", height: "100vh", position: "relative" }}>
          <Header article={article2} />
        </div>
        <div style={{ width: "100%", position: "relative" }}>
          <Header article={article2}>
            <div>Child 0: Vertical</div>
            <div>Child 1: Title</div>
            <div>Child 2: Deck</div>
            <div>Child 3: Image</div>
          </Header>
        </div>
      </div>
    )
  })
  .add("Feature Header - Full", () => {
    const article = _.extend({}, FeatureArticle, { hero_section: HeroSections[2] })
    const article2 = _.extend({}, FeatureArticle, { hero_section: HeroSections[4] })
    return (
      <div>
        <div style={{ width: "100%", height: "100vh", position: "relative" }}>
          <div style={{ width: "100%", height: "50px", backgroundColor: "black" }} />
          <Header article={article} height="calc(100vh - 50px)" />
        </div>
        <div style={{ width: "100%", height: "100vh", position: "relative" }}>
          <Header article={article2} />
        </div>
        <div style={{ width: "100%", position: "relative" }}>
          <Header article={article2}>
            <div>Child 0: Vertical</div>
            <div>Child 1: Title</div>
            <div>Child 2: Deck</div>
            <div>Child 3: Image</div>
          </Header>
        </div>
      </div>
    )
  })
  .add("Feature Header - SuperArticle", () => {
    const article = _.extend({}, SuperArticle, { hero_section: HeroSections[2] })

    return (
      <div style={{ width: "100%", height: "100vh", position: "relative" }}>
        <div style={{ width: "100%", height: "50px", backgroundColor: "black" }} />
        <Header article={article} height="calc(100vh - 50px)" />
      </div>
    )
  })
