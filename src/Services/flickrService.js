import { createFlickr, FlickrService } from 'flickr-sdk';

export class flickrService {
  static instance;
  _flickrClient;

  constructor() {
    const flickrApiKey = process.env.REACT_APP_FLICKR_API_KEY;
    this._flickrClient = createFlickr(flickrApiKey);
  }

  static get() {
    if (!this.instance) {
      this.instance = new flickrService();
    }
    return this.instance;
  }

  async getTagHotList() {
    const { hottags } = await this._flickrClient.flickr('flickr.tags.getHotList', {
      count: 5,
      period: 'day',
    });
    return hottags;
  }

  async getImagesByTag(tag) {
    if (tag == '') {
      return '';
    }
    const response = await this._flickrClient.flickr('flickr.photos.search', {
      tags: tag,
      pages: 1,
      per_page: 3,
      privacy_filter: 1,
      sort: 'interestingness-desc',
    });
    return response.photos;
  }
}
