import { isFirefox } from './utils/is'
import observer from './observer'
import gistsOnProfile from './features/gists/gists-on-profile'
import pullRequestsOnFeed from './features/pull-requests/pull-requests-on-feed'
import pullRequestsOnProfile from './features/pull-requests/pull-requests-on-profile'
import issuesOnFeed from './features/issues/issues-on-feed'
import issuesOnProfile from './features/issues/issues-on-profile'
import assetsDownloadCounter from './features/releases/assets/assets-download-counter'

const app = () => {
  gistsOnProfile()
  pullRequestsOnFeed()
  pullRequestsOnProfile()
  issuesOnFeed()
  issuesOnProfile()
}

isFirefox
  ? app()
  : ''

observer(app)
assetsDownloadCounter()

export default app
