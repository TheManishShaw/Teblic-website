import React from 'react'
import Blogs from '../Blogs';
import BlogBanner from './BlogBanner';
import BlogShare from './BlogShare';
import RecentBlog from './RecentBlog';
const BlogContent = () => {
  return (
    <>
      <section className="xl:pt-20 lg:pt-[120px] pb-5 lg:pb-20 2xl:px-40 xl:px-10 lg:px-28 md:px-20 sm:px-5">
        <div className="container sm:px-5">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-5">
              <BlogBanner />

              <div className="flex flex-wrap -mx-4">
                <div className="w-full lg:w-8/12 px-6">
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
                      Odoo 15: Future of business simplified
                    </h2>
                    <p
                      className="
                      text-base text-body-color
                      leading-relaxed
                      mb-6
                      wow
                      fadeInUp
                    "
                      data-wow-delay=".1s"
                    >
                      O Yes… Odoo-15 is here and we are thrilled beyond measure.
                      It is fresh, smooth and secure as it can be. The new Odoo
                      is all geared-up with revolutionary updates that will
                      double up your efficiency; minimize labor by at least 30%
                      thus saving huge on your valuable time.
                    </p>
                    <p
                      className="
                      text-base text-body-color
                      leading-relaxed
                      mb-6
                      wow
                      fadeInUp
                    "
                      data-wow-delay=".1s"
                    >
                      Odoo-15 comes with simplified forms, sharp looks and
                      bundles of updates in modules making it a class-apart yet
                      user-friendly platform to work on. With Odoo-15 business
                      management tool, it is smoother to come together and work
                      towards a collective goal like never before.{" "}
                    </p>

                    <p
                      className="
                      text-base text-body-color
                      leading-relaxed
                      mb-6
                      wow
                      fadeInUp
                    "
                      data-wow-delay=".1s"
                    >
                      <b> Accounting:</b> Traditional accounting could be
                      tiresome in today’s fast-paced life. Odoo-15’s powerful
                      OCR, revamped accounts forms makes it convenient to keep a
                      track of previous transactions and generate customer
                      invoices faster.
                    </p>

                    <p
                      className="text-base text-body-color leading-relaxed mb-6 wow fadeInUp"
                      data-wow-delay=".1s"
                    >
                      Rely on Odoo-15 and never count any account twice,
                      “Control Domains” minuses the chance of counting single
                      account multiple times. Payments can be recorded in list
                      view giving you an accurate total. Odoo-15 can partially
                      reconcile invoices and bills. Ability to fully reconcile
                      underpayments through payment tolerance mechanism is
                      added.
                    </p>
                    <p
                      className="
                      text-base text-body-color leading-relaxed mb-6 wow fadeInUp"
                      data-wow-delay=".1s"
                    >
                      <b>Appointments:</b> With Odoo-15, users can now send
                      custom invitations via SMS or email methods. Setting
                      reminders via notifications and emails in meetings section
                      in online appointments makes it simple keeping your day on
                      track. Define your meeting type with color schemed tags
                      and set priority. With slots, defining from and to dates
                      in appointments now comes handy. With Odoo 15, you can now
                      generate leads and opportunity from booked meetings.
                    </p>
                  </div>
                </div>
                <RecentBlog />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-4 px-4">
            <Blogs />
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogContent;