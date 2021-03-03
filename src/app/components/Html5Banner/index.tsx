/**
 *
 * Html5Banner
 *
 */
import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './Html5Banner.module.css';

interface Props {}

export function Html5Banner(props: Props) {
  return (
    <div className={classNames('tw-mx-auto my-5 tw-relative', styles.banner)}>
      <iframe
        src="/banners/index290x90.html"
        className={classNames(
          styles.iframe,
          styles.banner,
          'tw-hidden d-xs-block d-sm-none',
        )}
        title="Sale"
      />
      <iframe
        src="/banners/index540x90.html"
        className={classNames(
          styles.iframe,
          styles.banner,
          'tw-hidden d-sm-block md:tw-hidden',
        )}
        title="Sale"
      />
      <iframe
        src="/banners/index720x90.html"
        className={classNames(
          styles.iframe,
          styles.banner,
          'tw-hidden md:tw-block d-lg-none',
        )}
        title="Sale"
      />
      <iframe
        src="/banners/index960x90.html"
        className={classNames(
          styles.iframe,
          styles.banner,
          'tw-hidden d-lg-block d-xl-none',
        )}
        title="Sale"
      />
      <iframe
        src="/banners/index1140x90.html"
        className={classNames(
          styles.iframe,
          styles.banner,
          'tw-hidden d-xl-block',
          styles.dXxlNone,
        )}
        title="Sale"
      />
      <iframe
        src="/banners/index1440x90.html"
        className={classNames(
          styles.iframe,
          styles.banner,
          'tw-hidden',
          styles.dXxlBlock,
        )}
        title="Sale"
      />
      <Link to="/genesis" className={classNames(styles.link, styles.banner)}>
        <span className="sr-only">Open this add.</span>
      </Link>
    </div>
  );
}
