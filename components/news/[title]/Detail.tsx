import React from "react";

const Detail: React.FC<{
  title: string;
  image1: string;
  image2: string;
  image3: string;
  content: string;
}> = () => {
  return (
    <div className="text post-detail">
      <p>
        Mauris tellus sem, ultrices varius nisl at, convallis iaculis mauris.
        Sed eget sem vitae purus tempus dignissim. Quisque euismod nec lacus sit
        amet maximus. Ut convallis sagittis lorem auctor malesuada. Morbi auctor
        tortor eu risus condimentum.
      </p>

      {/* <!-- ***** Gallery Start ***** --> */}
      <div className="row page-gallery-wrapper">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <a
            href="/images/photos/blog/1.jpg"
            className="page-gallery imgfix_top_container"
            title="Manage In One Place"
            style={{
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              id="imgfix_wrapper_layer_1_0"
              className="imgfix_wrapper_layer"
              style={{
                position: "relative",
                padding: " 0",
                margin: " 0",
                width: " 100%",
                height: "100%",
                overflow: " hidden",
              }}
            >
              <img
                src="/images/photos/blog/1.jpg"
                alt=""
                className="imgfix_src_img"
                style={{ opacity: 1 }}
              />
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <a
            href="/images/photos/blog/2.jpg"
            className="page-gallery imgfix_top_container"
            title="Manage In One Place"
            style={{
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              id="imgfix_wrapper_layer_1_1"
              className="imgfix_wrapper_layer"
              style={{
                position: "relative",
                padding: " 0",
                margin: " 0",
                width: " 100%",
                height: "100%",
                overflow: " hidden",
              }}
            >
              <img
                src="/images/photos/blog/2.jpg"
                alt=""
                className="imgfix_src_img"
                style={{ opacity: 1 }}
              />
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <a
            href="/images/photos/blog/3.jpg"
            className="page-gallery imgfix_top_container"
            title="Manage In One Place"
            style={{
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              id="imgfix_wrapper_layer_1_2"
              className="imgfix_wrapper_layer"
              style={{
                position: "relative",
                padding: " 0",
                margin: " 0",
                width: " 100%",
                height: "100%",
                overflow: " hidden",
              }}
            >
              <img
                src="/images/photos/blog/3.jpg"
                alt=""
                className="imgfix_src_img"
                style={{ opacity: 1 }}
              />
            </div>
          </a>
        </div>
      </div>
      {/* <!-- ***** Gallery End ***** --> */}

      <p>
        Quisque bibendum mi quis consequat ultricies. Donec quis pharetra nisi,
        a congue justo. Aliquam erat volutpat. Nunc id lacus egestas, accumsan
        lorem eu, rhoncus velit. Duis dapibus varius mauris, ut rutrum leo
        vulputate a. Praesent ac fringilla turpis. Donec rhoncus eget enim sit
        amet euismod. Pellentesque pellentesque malesuada lobortis. Quisque et
        dictum nulla. Sed eu ante at massa imperdiet ultricies. Vivamus
        vulputate faucibus lorem, eget efficitur purus dictum nec.
      </p>
      
      <p>
        Suspendisse condimentum, eros ac pulvinar iaculis, augue odio vehicula
        leo, vitae dictum nibh quam rhoncus risus. Nam tristique tellus et
        convallis faucibus. Cras in lacus at odio tristique tempor vel quis sem.
        Sed id lorem sit amet turpis mattis tempor.
      </p>
    </div>
  );
};

export default Detail;
