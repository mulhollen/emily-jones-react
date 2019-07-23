import * as React from 'react';
import withInstagramFeed from 'origen-react-instagram-feed';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import compose from 'recompose/compose';

const InstaDiv = styled.div`
    display: flex;
    flex-direction: column;

    h3 {
        margin: 1.5rem auto 1.5rem;
    }
   
    a{
        color: #3E0609;
    }

    a:hover {
        text-decoration: underline;
    }
`
const SingleImage = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
    div {
        width: 160px;
        height: 160px;
        margin: 10px;
        justify-content: space-between;
    }
    
    div img {
        object-fit: cover;
    }

`

const styles = () => ({
  wrapper: {},
  image: {
    width: '100%',
    height: '100%',
  },
});

export type Props = {
  media?: Array<{
    displayImage: string,
    id?: string,
    postLink?: string,
    accessibilityCaption?: string,
  }>,
  account: "_emilyajones",
  classes: { [$Keys<$Call<typeof styles>>]: string },
  status: 'completed' | 'loading' | 'failed',
};

const InstaGrid = ({ classes, media, account, status}: Props) => {
  return (
      <InstaDiv>
        <h3><a href={`https://www.instagram.com/${account}/`} target="_blank">@_emilyajones</a></h3>
        <SingleImage>
        {media &&
            status === 'completed' &&
            media.map(({ displayImage, id, postLink, accessibilityCaption }) => (
            <div>
                <a
                href={postLink || `https://www.instagram.com/${account}/`} target="_blank"
                >
                <img
                    src={displayImage}
                    alt={accessibilityCaption || 'Instagram picture'}
                    className={classes.image}
                />
                </a>
            </div>
        ))}
        {status === 'loading' && <p>loading...</p>}
        {status === 'failed' && <p>Check instagram here</p>}
        </SingleImage>
    </InstaDiv>
  );
};

InstaGrid.defaultProps = {
  media: undefined,
};


export default compose(
  withInstagramFeed,
  withStyles(styles),
)(InstaGrid);

