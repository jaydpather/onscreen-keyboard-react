import React, { Component } from 'react'
import Layout from '../components/MyLayout';
import Key from '../components/Key';
import HalfKeyboard from '../components/HalfKeyboard';

export default class extends Component {
  static async getInitialProps(ctx) {
    //todo: handle error. (what if microservice fails to respond?)
    //todo: test case of real URL, not localhost.
    //  * when it runs on server, does it get a 404?
    //    * if not, does it go to the network instead of truly loading from localhost?

    console.log("getInitialProps")
    return {};
  }

  render () {
    console.log("rendering") //todo: why do we see this log message on both server and console when doing SSR?

    let leftKeyArray = [
      [' ', 'j', 'b', '.', ','],
      [' ', 'h', 'e', 'l', '"'],
      ['x', 'n', ' ', 'r', 'y'],
      [' ', 'p', 'o', 'u', ' '],
      [' ', ' ', 'k', ' ', ' '],
    ];

    let rightKeyArray = [
      [' ', 'q', 'f', ' ', ' '],
      [' ', 'g', 'a', 'c', ' '],
      ['z', 's', ' ', 'i', 'w'],
      [' ', 'm', 't', 'd', ' '],
      [' ', ' ', 'v', ' ', ' '],
    ];

    return (
      <Layout>
        <p>
          This is the home page!
        </p>

        <Key keyValue="a" />
        <br />
        <br />
        <div>
          <HalfKeyboard keyArray={leftKeyArray} />
          <HalfKeyboard keyArray={rightKeyArray} />
        </div>


      </Layout>
    )
  }
}