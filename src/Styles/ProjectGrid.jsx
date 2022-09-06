import styled from 'styled-components';
import fmmpic from '../assets/FMMpic.png';

export const PGContainer = styled.div`
  z-index: 2;

  display: grid;
  grid-template-columns: 0.1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 0.1fr;
  grid-template-rows: 0.1fr 1fr 1fr 1fr 1fr 1fr 0.1fr;
  gap: 0px 0px;
  grid-template-areas:
    '. . . . . . . . .'
    '. ProjectName ProjectName ProjectName ProjectLinks ProjectLinks ProjectLinks ProjectLinks .'
    '. . . . Photo Photo Photo Photo .'
    '. Description Description Description Photo Photo Photo Photo .'
    '. Description Description Description Photo Photo Photo Photo .'
    '. Description Description Description Photo Photo Photo Photo .'
    '. . . . . . . . .';

  //////////////OLD////////////
  // display: grid;
  // grid-template-columns: 0.1fr 1fr 1fr 1fr 1fr 0.1fr;
  // grid-template-rows: 0.1fr 1fr 1fr 1fr 0.1fr;
  // gap: 0px 0px;
  // grid-auto-flow: row;
  // grid-template-areas:
  //   '. . . . . .'
  //   '. ProjectName ProjectName Photo Photo .'
  //   '. Description Description Photo Photo .'
  //   '. Description Description Photo Photo .'
  //   '. . . . . .';
  ////////////////OLD/////////////////////
  height: 85vh;
  width: 70%;
  margin-bottom: 10%;

  background-color: #8b5e34;

  border-radius: 2%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  margin: 10px;
  color: white;
  border: 10px double black;
  opacity: 0.97;
  position: fixed;
  top: 8%;
  left: 12%;
  bottom: 7%;
  right: 12%;
  overflow: auto;
  // font-size: 21px;
  text-align: center;
  overflow: hidden;
  -webkit-animation: fadein 3s;
  -moz-animation: fadein 3s;
  -ms-animation: fadein 3s;
  -o-animation: fadein 3s;
  animation: fadein 3s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.97;
    }
  }

  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.97;
    }
  }

  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.97;
    }
  }

  @-ms-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.97;
    }
  }

  @-o-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.97;
    }
  }
`;

export const Photo = styled.div`
  grid-area: Photo;
  border: 3px solid white;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ProjectName = styled.div`
  grid-area: ProjectName;

  //   display: flex;
  //   justify-content: left;
  //   margin: 2% 0 0 8%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1cm;
  font-weight: bolder;
  text-decoration: underline;
`;

export const Description = styled.div`
  grid-area: Description;

  p {
    padding-left: 20%;
    border-top: 5px double white;
    padding-top: 5%;
  }
  a {
    color: inherit;
    margin: 5%;
  }

  a:hover,
  a:focus {
    opacity: 0.75;
    color: inherit;
  }

  a:visited {
    text-decoration: none;
    color: inherit;
  }
`;

export const ProjectLinks = styled.div`
  grid-area: ProjectLinks;
  // padding: 10px;
  display: flex;
  flex-direction: row;
  overflow: visible;

  p {
    font-size: 1.5rem;
    font-weight: bolder;

    clear: both;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    // text-indent: 0%;

    // display: flex;
    // flex-direction: row;
    padding-left: 20%;
    border-bottom: 5px double white;
    padding-bottom: 2%;
    width: 200%;
    overflow: visible;
  }
  a {
    color: inherit;
    margin: 3%;
  }

  a:hover,
  a:focus {
    opacity: 0.75;
    color: inherit;
  }

  a:visited {
    text-decoration: none;
    color: inherit;
  }
`;
