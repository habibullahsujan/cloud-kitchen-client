import React from "react";
import useTitle from "../../Hooks/useTitle";

const Blog = () => {

  useTitle('Blog')
  return (
    <div>
      <section className="bg-white">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize xl:text-5xl lg:text-4xl dark:text-white">
            <span className="text-blue-500 ">Blog</span>
          </h1>
          <section className="flex flex-col gap-5 my-10">
            <div className="p-8 border rounded-lg dark:border-gray-700">
              <h3 className="text-blue-500 font-bold text-2xl">
                Difference between SQL and NoSQL
              </h3>
              <p className="leading-loose text-gray-500 dark:text-gray-400">
                <span className="font-semibold">
                  There are four practical differences between SQL and NoSQL:
                </span>{" "}
                <br /> 1-Language <br />
                2-Scalability <br />
                3-Structure <br />
                5- Properties <br />
                1. Language SQL has been around for over 40 years, so it is
                recognizable, documented, and widely-used. Safe and versatile,
                it's particularly well suited for complex queries. However, SQL
                restricts the user to working within a predefined tabular
                schema, and more care must be taken to organize and understand
                the data before it is used. The dynamic schemata of NoSQL
                databases allow representation of alternative structures, often
                alongside each other, encouraging greater flexibility. There is
                less emphasis on planning, greater freedom when adding new
                attributes or fields, and the possibility of varied syntax
                across databases. As a group, however, NoSQL languages lack the
                standard interface which SQL provides, so more complex queries
                can be difficult to execute. Though there are many dialects of
                SQL, all share a common syntax and almost-identical grammar.
                When querying relational databases, fluency in one language
                translates to proficiency in most others. On the other hand,
                there is very little consistency between NoSQL languages, as
                they concern a diverse set of unrelated technologies. Many NoSQL
                databases have a unique data manipulation language constrained
                by particular structures and capabilities. 2. Scalability Most
                SQL databases can be scaled vertically, by increasing the
                processing power of existing hardware. NoSQL databases use a
                master-slave architecture which scales better horizontally, with
                additional servers or nodes. These are useful generalizations,
                but it's important to note: SQL databases can be scaled
                horizontally as well, though sharding or partitioning logic is
                often the user's onus and not well supported. NoSQL technologies
                are diverse and while many rely on the master-slave
                architecture, options for scaling vertically also exist. Savings
                made using more efficient data structures can overwhelm
                differences in scalability; most important is to understand the
                use case and plan accordingly. 3. Structure SQL database
                schemata always represent relational, tabular data, with rules
                about consistency and integrity. They contain tables with
                columns (attributes) and rows (records), and keys have
                constrained logical relationships. NoSQL databases need not
                stick to this format, but generally fit into one of four broad
                categories: Column-oriented databases transpose row-oriented
                RDBMSs, allowing efficient storage of high-dimensional data and
                individual records with varying attributes. Key-Value stores are
                dictionaries which access diverse objects with a key unique to
                each. Document stores hold semi-structured data: objects which
                contain all of their own relevant information, and which can be
                completely different from each other. Graph databases add the
                concept of relationships (direct links between objects) to
                documents, allowing rapid traversal of greatly connected data
                sets. 4. Properties At a high level, SQL and NoSQL comply with
                separate rules for resolving transactions. RDBMSs must exhibit
                four “ACID” properties: Atomicity means all transactions must
                succeed or fail completely. They cannot be partially-complete,
                even in the case of system failure. Consistency means that at
                each step the database follows invariants: rules which validate
                and prevent corruption. Isolation prevents concurrent
                transactions from affecting each other. Transactions must result
                in the same final state as if they were run sequentially, even
                if they were run in parallel. Durability makes transactions
                final. Even system failure cannot roll-back the effects of a
                successful transaction. NoSQL technologies adhere to the “CAP”
                theorem, which says that in any distributed database, only two
                of the following properties can be guaranteed at once:
                Consistency: Every request receives the most recent result, or
                an error. (Note this is different than in ACID) Availability:
                Every request has a non-error result, regardless of how recent
                that result is. Partition tolerance: Any delays or losses
                between nodes will not interrupt the system’s operation.
              </p>
            </div>

            <div className="p-8 border rounded-lg dark:border-gray-700">
              <h3 className="text-blue-500 font-bold text-2xl">
                What is JWT, and how does it work?
              </h3>
              <p className="leading-loose text-gray-500 dark:text-gray-400">
                Basically the identity provider(IdP) generates a JWT certifying
                user identity and Resource server decodes and verifies the
                authenticity of the token using secret salt / public key. User
                sign-in using username and password or google/facebook.
                Authentication server verifies the credentials and issues a jwt
                signed using either a secret salt or a private key. User's
                Client uses the JWT to access protected resources by passing the
                JWT in HTTP Authorization header. Resource server then verifies
                the authenticity of the token using the secret salt/ public key.
              </p>
            </div>
            <div className="p-8 border rounded-lg dark:border-gray-700">
              <h3 className="text-blue-500 font-bold text-2xl">
                What is the difference between javascript and NodeJS?
              </h3>
              <p className="leading-loose text-gray-500 dark:text-gray-400">
                <span className="font-semibold">
                  Differences between JavaScript and NodeJs
                </span>
                <br />
                JavaScript is a simple programming language that runs in any
                browser JavaScript Engine. Whereas Node JS is an interpreter or
                running environment for a JavaScript programming language that
                holds many excesses, it requires libraries that can easily be
                accessed from JavaScript programming for better use. JavaScript
                is normally used for any client-side activity for one web
                application. An activity can be addressing business validation
                or dynamic page display in some schedule time interval or basic
                Ajax call kind of task. Those are used for a maximum time for
                any web application. Whereas Node JS mainly used for accessing
                or running any operating system for non-blocking operation. An
                operation like creating or executing a shell script, or getting
                some specific hardware-related information on one call or
                installed certificate details in the system or a lot of define
                task is non-blocking on an operating system. JavaScript running
                in any engine like Spider monkey (FireFox), JavaScript Core
                (Safari), V8 (Google Chrome). So JavaScript programming is very
                easy to write, and put any running environment means proper
                browser. Whereas Node JS only support the V8 engine, which
                googles chrome specific. But whether it supports the V8 engine,
                written JavaScript code can able to run in any environment. So
                there has no browser-specific constraint on it. JavaScript is
                normally following Java Programming language standard. There may
                have some different way of writing code, but at the same time,
                we can say it following the Java Programming language standard.
                Whereas node JS is written in C++ and provides a V8 engine base
                browser javascript running engine, it helps us run a written
                javascript program in any browser environment. For accessing any
                operating system, specific non-blocking task JavaScript has some
                specific object, but all of them are operating system specific.
                An example is ActiveX Control which is only running in Windows.
                But Node JS is given utility to run some operating system
                specific non-blocking tasks from any JavaScript programming. It
                doesn’t have any operating system specific constant. Node JS is
                very much familiar to create a specific binding with the file
                system and allows the developer to read or sometimes write on
                disk.
              </p>
            </div>
            <div className="p-8 border rounded-lg dark:border-gray-700">
              <h3 className="text-blue-500 font-bold text-2xl">
                How does NodeJS handle multiple requests at the same time?
              </h3>
              <p className="leading-loose text-gray-500 dark:text-gray-400">
                NodeJS receives multiple client requests and places them into
                EventQueue. NodeJS is built with the concept of event-driven
                architecture. NodeJS has its own EventLoop which is an infinite
                loop that receives requests and processes them. EventLoop is the
                listener for the EventQueue. If NodeJS can process the request
                without I/O blocking then the event loop would itself process
                the request and sends the response back to the client by itself.
                But, it is possible to process multiple requests parallelly
                using the NodeJS cluster module or worker_threads module.
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Blog;
