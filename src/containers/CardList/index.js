import React from 'react';
import './style.scss';
import CardItem from '../components/CardItem';
import Button from '../components/Button';
import {ROOT_URL,DEFAULT_COURSE_BG} from "../api/const";
import Loadings from '../components/Loadings'



export default class CardList extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
  }
  
  render(){


    return (
      <div className="list-item">
        <ul>
          <li className="list-item">
            <div className="component-wrapper">
              <div className="image-wrap">
                <a href="https://page.auctions.yahoo.co.jp/jp/auction/j1088721952" target="_blank" rel="noopener" data-cl-params="_cl_vmodule:rchi;_cl_link:img;_cl_position:1;etc:p=40000,etm=1681899019,stm=1681640363,w=21,wtm=1681741985,we=2,wo=2,vsc=1.2962686412573259,b_max=49,b_min=0,br_max=19,br_min=0,p_max=160000,p_min=1000,rcs_max=0.45613232,rcs_min=0.023534928,w_max=72,w_min=0;fpri:40000;npri:40000;rcbucket:ctrl;rcconid:j1088721952;rcctxid:1;rcfriid:n1088742769;rcmid:m_auc11;rcord:1;rcs:0.062492814;rcsrvid:n1088742769,r1087645425,u1087013309;rctype:affinity_hf_intp2v;" className="image-link" data-cl_cl_index="138">
                  <img src="https://auc-pctr.c.yimg.jp/i/auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0404/users/2fef18a99012df62701062bfa614291d0e19b9a4/i-img1200x774-1681639855z0jw3c199662.jpg?pri=s&amp;w=298&amp;h=298&amp;ccw=298&amp;cch=298&amp;fill=1&amp;fw=298&amp;fh=298&amp;up=0&amp;nf_src=sy&amp;nf_path=images/auc/pc/top/image/1.0.3/na_170x170.png&amp;nf_st=200" alt="【美品】Apple iPhone SE 第3世代（SE3） 白 64B SIMロック解除 利用制限◯ 送料無料" loading="lazy" />
                  <span className="image-label">送料無料</span>
                </a>
                <div className="watch-wrap">
                  <a className="watch-button" data-cl-params="_cl_vmodule:rchi;_cl_link:watch;_cl_position:1;sw:on;" data-cl_cl_index="139"></a>
                </div>
              </div>
              <a href="https://page.auctions.yahoo.co.jp/jp/auction/j1088721952" target="_blank" rel="noopener" data-cl-params="_cl_vmodule:rchi;_cl_link:title;_cl_position:1;etc:p=40000,etm=1681899019,stm=1681640363,w=21,wtm=1681741985,we=2,wo=2,vsc=1.2962686412573259,b_max=49,b_min=0,br_max=19,br_min=0,p_max=160000,p_min=1000,rcs_max=0.45613232,rcs_min=0.023534928,w_max=72,w_min=0;fpri:40000;npri:40000;rcbucket:ctrl;rcconid:j1088721952;rcctxid:1;rcfriid:n1088742769;rcmid:m_auc11;rcord:1;rcs:0.062492814;rcsrvid:n1088742769,r1087645425,u1087013309;rctype:affinity_hf_intp2v;" class="product-link">
                <span class="product-title">【美品】Apple iPhone SE 第3世代（SE3） 白 64B SIMロック解除 利用制限◯ 送料無料</span>
                <span class="product-price">
                  <span class="price-label">即決</span>
                  <span class="price-value">40,000<span class="price-unit">円</span></span>
                </span>
              </a>
            </div>
          </li>

        </ul>
        <div>
          <h3 className="course-type-title">我要买</h3>
        </div>
      </div>
    )
  }
}
