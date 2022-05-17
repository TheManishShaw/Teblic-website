import React from 'react'
import Blogs from '../Blogs';
import BlogBanner from './BlogBanner';
import BlogShare from './BlogShare';
import RecentBlog from './RecentBlog';
const BlogContent = () => {
  return (
    <>
      <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 px-36 ">
        <div className="container">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <BlogBanner />

              <div className="flex flex-wrap -mx-4">
                <div className="w-full lg:w-8/12 px-4">
                  <BlogShare />
                  <div>
                    <h2
                      className="
                      font-bold
                      text-dark text-[26px]
                      sm:text-3xl
                      md:text-4xl
                      leading-snug
                      sm:leading-snug
                      md:leading-snug
                      mb-6
                      wow
                      fadeInUp
                    "
                      data-wow-delay=".1s
                    "
                    >
                      Facing a challenge is kind of a turn-on for an easy rider
                    </h2>
                    <p
                      className="
                      text-base text-body-color
                      leading-relaxed
                      mb-8
                      wow
                      fadeInUp
                    "
                      data-wow-delay=".1s"
                    >
                      There&apos;s a time and place for everything… including
                      asking for reviews. For instance: you should not asking
                      for a review on your checkout page. The sole purpose of
                      this page is to guide your customer to complete their
                      purchase, and this means that the page should be as
                      minimalist and pared-down possible. You don&apos;t want to
                      have any unnecessary elements or Call To Actions.
                    </p>
                    <p
                      className="
                      text-base text-body-color
                      leading-relaxed
                      mb-10
                      wow
                      fadeInUp
                    "
                      data-wow-delay=".1s"
                    >
                      There&apos;s a time and place for everything… including
                      asking for reviews. For instance: you should not asking
                      for a review on your checkout page. The sole purpose of
                      this page is to guide your customer to complete their
                      purchase, and this means that the page should be as
                      minimalist and pared-down possible. You don&apos;t want to
                      have any unnecessary elements or Call To Actions.
                    </p>
                    <h3
                      className="
                      font-bold
                      mb-8
                      text-dark text-2xl
                      sm:text-[26px]
                      wow
                      fadeInUp
                    "
                      data-wow-delay=".1s"
                    >
                      Sea no quidam vulputate
                    </h3>
                    <p
                      className="
                      text-base text-body-color
                      leading-relaxed
                      mb-10
                      wow
                      fadeInUp
                    "
                      data-wow-delay=".1s"
                    >
                      At quo cetero fastidii. Usu ex ornatus corpora sententiae,
                      vocibus deleniti ut nec. Ut enim eripuit eligendi est, in
                      iracundia signiferumque quo. Sed virtute suavitate
                      suscipiantur ea, dolor this can eloquentiam ei pro. Suas
                      adversarium interpretaris eu sit, eum viris impedit ne.
                      Erant appareat corrumpit ei vel.
                    </p>

                    <h3
                      className=" font-bold mb-8 text-dark text-2xl sm:text-[26px] wow fadeInUp"
                      data-wow-delay=".1s"
                    >
                      What is it with your ideas?
                    </h3>

                    <p
                      className="text-base text-body-color leading-relaxed mb-8 wow fadeInUp"
                      data-wow-delay=".1s"
                    >
                      At quo cetero fastidii. Usu ex ornatus corpora sententiae,
                      vocibus deleniti ut nec. Ut enim eripuit eligendi est, in
                      iracundia signiferumque quo. Sed virtute suavitate
                      suscipiantur ea, dolor this can eloquentiam ei pro. Suas
                      adversarium interpretaris eu sit, eum viris impedit ne.
                      Erant appareat corrumpit ei vel.
                    </p>
                    <p
                      className="
                      text-base text-body-color leading-relaxed mb-11 wow fadeInUp"
                      data-wow-delay=".1s"
                    >
                      At quo cetero fastidii. Usu ex ornatus corpora sententiae,
                      vocibus deleniti ut nec. Ut enim eripuit eligendi est, in
                      iracundia signiferumque quo. Sed virtute suavitate
                      suscipiantur ea, dolor this can eloquentiam ei pro. Suas
                      adversarium interpretaris eu sit, eum viris impedit ne.
                      Erant appareat corrumpit ei vel.
                    </p>
                  </div>
                </div>
                <RecentBlog />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-4">
            <Blogs />
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogContent