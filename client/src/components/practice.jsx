import React from "react";
import '../css/Practice.css';
import GFG from '.././components/assets/gfg.png';
import codechef from '.././components/assets/codechef.svg';
import codeforces from '.././components/assets/codeforces.png';
import HackerRank from '.././components/assets/Hackerrank.png';

const Practice = () => {
    return (
        <>
            <div >
                <h1 class="d1"> PRACTICE CODING SITES</h1>

                <div id="s1">
                    <form action="https://www.google.com/search">
                        <input style={{ marginLeft:"1200px" ,marginBottom: "80px" , borderRadius: "10px" }} type="text" name="q" placeholder="Search.." />
                        <button style={{backgroundcolor: "rgb(51, 183, 161)"     ,borderRadius: "20px"}} class="dd" >Search</button>
                    </form>
                </div>

            </div>

            <div  >
                <div id="m1" >
                    <img style={{width: "180px", height: "70px"}} src="https://upload.wikimedia.org/wikipedia/commons/c/c2/LeetCode_Logo_2.png" class="m2" alt="leetcode" />
                    <img style={{height: "118px"}} src={GFG} class="m2" alt="gfg" />
                    <img style={{height: "100px"}} src="https://d1q9av5b648rmv.cloudfront.net/v3/1024x1024/sticker/m/white/front/6242844/1614660290-967x954.png.jpg?h=508214e01a4eb6c5b734533da4420fed45bffa88&printed=true" class="m2" alt="atcoder" />

                </div   >
                <div id="a1" >
                    <a href="https://www.leetcode.com/"style={{marginLeft:"21rem"}}><button class="button-87" role="button">Leetcode</button></a>
                    <a href="https://www.geeksforgeeks.org/"style={{marginLeft:"35rem"}}><button class="button-87" role="button">GeeksforGeeks</button></a>
                    <a href="https://www.atcoder.jp/"style={{marginLeft:"32.5rem"}}><button class="button-87" role="button">AtCoder</button></a>
    
                </div>
            </div>
            <br />


            <div>


                <div id="m1" >
                    <img style={{height: "118px"}} src={HackerRank}class="m2" alt="Hackerrank" />
                    <img style={{height: "118px"}} src={codechef} class="m2" alt="Codechef" />
                    <img style={{height: "118px"}} src={codeforces} class="m2" alt="codeforces" />

                </div   >

                <div id="a1"  >
                    <a href="https://www.hackerrank.com/"style={{marginLeft:"19rem"}}><button class="button-87" role="button">HackerRank</button></a>
                    <a href="https://www.codechef.com/"style={{marginLeft:"33.5rem"}}><button class="button-87" role="button">Codechef</button></a>
                    <a href="https://www.codeforces.com/"style={{marginLeft:"33.5rem"}}><button class="button-87" role="button">Codeforces</button></a>
                </div>
                <h1>Distract free Geeks</h1>

            </div>
        </>
    );
};
export default Practice;