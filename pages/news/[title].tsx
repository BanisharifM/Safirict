import BreadCrumbs from "components/Global/BreadCrumbs";
import Detail from "components/news/[title]/Detail";
import Image from "components/news/[title]/Image";
import Meta from "components/news/[title]/Meta";
import Share from "components/news/[title]/Share";
import { useRouter } from "next/router";
import React from "react";

const New = () => {
  const router = useRouter();
  return (
    <div className="page">
      <BreadCrumbs query={router.query} />
      <div className="page-bottom">
        <div className="container">
          <div className="row">
            <div
              /*className="col-lg-8 col-md-12 col-sm-12" */ className="col-12"
            >
              <div className="blog-list">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="blog-post-thumb big">
                      <Image image="" month="" day="" />
                      <Meta author="" comments="" />
                      <Detail
                        title=""
                        image1=""
                        image2=""
                        image3=""
                        content=""
                      />
                      <div className="post-footer">
                        <span>Share - </span>
                        <Share />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
