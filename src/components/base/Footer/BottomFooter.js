import React from 'react'
import d from '../../../data/dictionary'
import fbIcon from '../../../media/fb.png'
import gPlusIcon from '../../../media/g+.png'
import igIcon from '../../../media/ig.png'
import pageAlert from '../../../utils/pageAlert'
import scrollToTop from '../../../utils/scrollToTop'
import twitterIcon from '../../../media/tw.png'
import upArrowIcon from '../../../media/upArrow.png'
import { Typography } from '@material-ui/core'

export default () => {
  return (
    <div id="bottomFooter">
      <Typography id="copyrights">{d('copyrights')}</Typography>
      <div id="footerButtons">
        <img src={gPlusIcon} alt={d('gPlus')} onClick={() => pageAlert(d('gPlus'))} />
        <img src={twitterIcon} alt={d('twitter')} onClick={() => pageAlert(d('twitter'))} />
        <img src={igIcon} alt={d('instagram')} onClick={() => pageAlert(d('instagram'))} />
        <img src={fbIcon} alt={d('facebook')} onClick={() => pageAlert(d('facebook'))} />
        <img src={upArrowIcon} alt={d('backUp')} onClick={scrollToTop} />
      </div>
    </div>
  )
}
