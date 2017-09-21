import { find } from "lodash"
import React from "react"

interface ReadMoreWrapperProps {
  isTruncated?: boolean
  id?: any
}

interface ReadMoreWrapperState {
  truncationHeight: number | string
}

class ReadMoreWrapper extends React.Component<ReadMoreWrapperProps, ReadMoreWrapperState> {
  constructor(props) {
    super(props)
    this.state = {
      truncationHeight: "100%",
    }
  }

  componentDidMount() {
    if (this.props.isTruncated) {
      this.setState({ truncationHeight: this.calculateTruncationHeight() })
    }
  }

  calculateTruncationHeight = () => {
    if (this.props.isTruncated) {
      let height = 0
      let charCount = 0
      find(document.getElementsByClassName("article__text-section"), section => {
        let sectionCharCount = 0
        const foundTag = find(section.getElementsByTagName("p"), tag => {
          const textContent = tag.textContent
          sectionCharCount = sectionCharCount + textContent.length
          charCount = charCount + textContent.length
          if (textContent && sectionCharCount > 150 && charCount > 2000) {
            height =
              tag.getBoundingClientRect().bottom -
              document.getElementsByClassName(`article-id__${this.props.id}`)[0].getBoundingClientRect().top
            return true
          }
          return false
        })
        return foundTag ? true : false
      })
      return height > 0 ? height : "100%"
    } else {
      return "100%"
    }
  }

  getTruncationHeight = () => {
    return this.props.isTruncated ? this.state.truncationHeight : "100%"
  }

  getOverflow = () => {
    return this.props.isTruncated ? "hidden" : "unset"
  }

  render() {
    return (
      <div
        className={`article-id__${this.props.id}`}
        style={{
          height: this.getTruncationHeight(),
          overflow: this.getOverflow(),
        }}
      >
        {this.props.children}
      </div>
    )
  }
}

export default ReadMoreWrapper