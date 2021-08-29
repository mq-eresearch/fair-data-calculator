import { useState } from "react";
import Introduction from "./Introduction";
import QuestionSection from "./QuestionSection";
import CalculateButton from "./CalculateButton";
import ResultsModal from "./ResultsModal";
import HelpModal from "./HelpModal";
import { generateText } from "./Utils";

function Main() {
  const [fairQuestions] = useState([
    {
      id: "findable",
      title: "Findable",
      help: "Making data Findable includes assigning a persistent identifier (like a DOI or Handle), having rich metadata to describe the data and making sure it is findable through disciplinary and generalist discovery portals (local and international).",
      questionBlock: [
        {
          // id: "findable-q1",
          id: "f1",
          question: "Does the dataset have any identifiers assigned?",
          help: `<div class="modal-body">
                      <p>
                      Identifiers are essential for identifying, finding, retrieving, linking and citing datasets.
                      A Web address (URL) can be used to specify the online location of a resource but over time URLs
                      tend to change which leads to broken links to the data.  To be useful, identifiers need to be
                      persistent and unique. Digital Object Identifiers (DOIs) and other persistent identifiers (PIDs)
                      provide a permanent citable reference to a particular dataset.  The DOI is a permanent fixed
                      reference to the dataset no matter where it is located online and enables citation and citation
                      metrics.
                      </p><p>
                      Services to create a persistent identifier are often offered by your affiliated institution or
                      the repository you are using to describe your data. Talk to your library service for more information.
                      </p><p>
                      Read more: <a href="https://www.ands.org.au/working-with-data/citation-and-identifiers" target="_blank">
                      Persistent Identifiers</a>
                      </p>
                  </div>`,
          defaultAnswer: "findable-q1-a1",
          answers: [
            {
              id: "findable-q1-a1",
              answerText: "No Identifier",
              dataRating: 0,
            },
            {
              id: "findable-q1-a2",
              answerText: "Local Identifier",
              dataRating: 1,
            },
            {
              id: "findable-q1-a3",
              answerText: "Web Address (URL)",
              dataRating: 3,
            },
            {
              id: "findable-q1-a4",
              answerText: "Global",
              dataRating: 8,
            },
          ],
        },
        {
          id: "f2",
          question:
            "Is the dataset identifier included in all metadata records/files describing the data?",
          help: `<p>The identifier (preferably a persistent identifier) needs to be clearly stated in the metadata
                    record describing the data collection, and also in any associated data files or metadata.
                </p>`,
          defaultAnswer: "findable-q2-a1",
          answers: [
            {
              id: "findable-q2-a1",
              answerText: "No",
              dataRating: 0,
            },
            {
              id: "findable-q2-a2",
              answerText: "Yes",
              dataRating: 1,
            },
          ],
        },
        {
          id: "f3",
          question: "How is the data described with metadata?",
          help: `<p>
                        Comprehensive metadata records will include descriptive content that facilitates discovery, access
                        and reuse of the data being described. While there is no 'one size fits all' list,
                        comprehensive metadata should include:
                        </p><ul>
                            <li>a globally unique persistent identifier e.g. a DOI</li>
                            <li>a title</li>
                            <li>related people, i.e. the data creator or custodian</li>
                            <li>how to access the data and file formats</li>
                            <li>a description of how the data were created and how to interpret the data
                            subject or keywords</li>
                            <li>citation information that clearly indicates how the data should be cited</li>
                            <li>a machine-readable data licence</li>
                            <li>provenance and contextual information such as:</li>
                            <li><ul>
                                <li>links to related publications, projects, services and software</li>
                                <li>methodology and processes involved in data production</li>
                            </ul></li>
                            <li>spatial and temporal coverage (if relevant)</li>
                            <li>object-level data description</li>
                        </ul>
                        Providing metadata in a standard schema allows it to be read and used by machines as well as humans.
                    <p>
                        Read more: <a href="https://www.ands.org.au/working-with-data/metadata" target="_blank">
                        Metadata</a>
                    </p>`,
          defaultAnswer: "findable-q3-a1",
          answers: [
            {
              id: "findable-q3-a1",
              answerText: "The data is not described",
              dataRating: 0,
            },
            {
              id: "findable-q3-a2",
              answerText: "Brief title and description",
              dataRating: 2,
            },
            {
              id: "findable-q3-a3",
              answerText:
                "Comprehensively, but in a text-based, non-standard format",
              dataRating: 3,
            },
            {
              id: "findable-q3-a4",
              answerText:
                "Comprehensively (see suggestion) using a recognised formal machine-readable metadata schema",
              dataRating: 4,
            },
          ],
        },
        {
          id: "f4",
          question:
            "What type of repository or registry is the metadata record in?",
          help: `<p>
                    A rich metadata description alone does not ensure a dataset’s ‘findability’ on the internet;
                    the dataset needs to be registered or indexed in a searchable resource, such as a generalist
                    (e.g. <a href="https://figshare.com" target="_blank">Figshare</a>,
                    <a href="http://datadryad.org" target="_blank">Dryad</a>,
                    <a href="https://zenodo.org" target="_blank">Zenodo</a>
                    domain-specific (e.g.
                    <a href="https://pangaea.de" target="_blank">PANGAEA</a>,
                    <a href="https://ada.edu.au" target="_blank">ADA</a>,
                    <a href="https://www.icpsr.umich.edu" target="_blank">ICPSR</a>), or institutional
                    (e.g. <a href="https://openresearch-repository.anu.edu.au" target="_blank">ANU Research Repository</a> ,
                      <a href="https://ses.library.usyd.edu.au" target="_blank">Sydney eScholarship Repository</a>,
                    <a href="https://data.gov.au" target="_blank">data.gov.au</a>) data repository or
                    registry. Ideally these repositories/registries are indexed by search engines such as Google
                    and/or Google Scholar.
                </p>`,
          defaultAnswer: "findable-q4-a1",
          answers: [
            {
              id: "findable-q4-a1",
              answerText: "The data is not described in any repository",
              dataRating: 0,
            },
            {
              id: "findable-q4-a2",
              answerText: "Local institution repository",
              dataRating: 2,
            },
            {
              id: "findable-q4-a3",
              answerText: "Domain-specific repository",
              dataRating: 2,
            },
            {
              id: "findable-q4-a4",
              answerText: "Generalist public repository",
              dataRating: 2,
            },
            {
              id: "findable-q4-a5",
              answerText:
                "Data is in one place but discoverable through several registries",
              dataRating: 4,
            },
          ],
        },
      ],
    },

    {
      id: "accessible",
      title: "Accessible",
      help: "To make data accessible may include making the data open using a standardised protocol. However the data does not necessarily have to be open. There are sometimes good reasons why data cannot be made open, for example privacy concerns, national security or commercial interests. If it is not open there should be clarity and transparency around the conditions governing access and reuse",
      questionBlock: [
        {
          id: "a1",
          question: "How accessible is the data?",
          help: `<p>
                    Not all data that is discoverable can be freely accessed. Often there are embargoes,
                    access controls, and access permissions associated with data due to a variety of issues
                    such as privacy and commercial interests.

                    Even with all these issues much <a href="https://www.ands.org.au/working-with-data/sensitive-data" target="_blank"> sensitive data </a>
                    can be shared. Many other issues that
                    could be perceived as blockers to sharing data may be
                    <a href="http://datapub.cdlib.org/closed-data-excuses-excuses" target="_blank">overcome</a>.
                </p>`,
          defaultAnswer: "accessible-q1-a1",
          answers: [
            {
              id: "accessible-q1-a1",
              answerText: "No access to data or metadata",
              dataRating: 0,
            },
            {
              id: "accessible-q1-a2",
              answerText: "Access to metadata only",
              dataRating: 1,
            },
            {
              id: "accessible-q1-a3",
              answerText:
                "Unspecified conditional access e.g. contact the data custodian for access",
              dataRating: 2,
            },
            {
              id: "accessible-q1-a4",
              answerText: "Embargoed access after a specified date",
              dataRating: 3,
            },
            {
              id: "accessible-q1-a5",
              answerText:
                "A de-identified / modified subset of the data is publicly accessible",
              dataRating: 4,
            },
            {
              id: "accessible-q1-a6",
              answerText:
                "Fully accessible to persons who meet explicitly stated conditions, e.g. ethics approval for sensitive data",
              dataRating: 5,
            },
            {
              id: "accessible-q1-a7",
              answerText: "Publicly accessible",
              dataRating: 5,
            },
          ],
        },
        {
          id: "a2",
          question:
            "Is the data available online without requiring specialised protocols or tools once access has been approved?",
          help: `<p className="lead">
                      Ideally users would like to retrieve appropriate internet content directly and unhindered once
                      they have located it. Internet protocols (e.g. http and ftp) define rules and conventions for
                      communication between devices, and tools and services are available to facilitate this process,
                      e.g. APIs.
                  </p>

                  <h5>Protocols</h5>

                  <p>
                  <a href="https://www.lifewire.com/hypertext-transfer-protocol-817944" target="_blank">
                      HTTP</a> (Hypertext Transfer Protocol) is the set of rules for transferring files (text, graphic
                      images, sound, video, and other multimedia files) on the
                      <a href="http://searchcrm.techtarget.com/definition/World-Wide-Web" target="_blank">
                      World Wide Web</a>. As soon as a Web
                      user opens their Web browser, the user is indirectly making use of HTTP.
                  </p>

                  <p>
                  <a href="https://www.lifewire.com/file-transfer-protocol-817943" target="_blank">
                      FTP</a> (File Transfer Protocol) is a standard Internet
                  <a href="http://searchnetworking.techtarget.com/definition/protocol">protocol</a> for transmitting
                  files between computers on the Internet over TCP/IP connections.

                  Read more: <a href="https://www.lifewire.com/definition-of-protocol-network-817949" target="_blank">
                  Web protocols</a>
                  </p>

                  <p>
                      API (Application Programming Interface): When information is made available in any machine
                      readable format, it becomes possible to make that information directly available to programs
                      that request that information over the web.  An API is the way this information is made
                      directly available to other machines.
                  </p><p>
                  View more: <a href="https://youtu.be/s7wmiS2mSXY" target="_blank">What is an API?</a>
                  </p>
                  <p>
                      OGC - <a href="http://www.opengeospatial.org/ogc" target="_blank">http://www.opengeospatial.org/ogc</a>
                  </p>`,
          defaultAnswer: "accessible-q2-a1",
          answers: [
            {
              id: "accessible-q2-a1",
              answerText: "No access to data",
              dataRating: 0,
            },
            {
              id: "accessible-q2-a2",
              answerText: "By individual arrangement",
              dataRating: 1,
            },
            {
              id: "accessible-q2-a3",
              answerText: "File download from online location",
              dataRating: 2,
            },
            {
              id: "accessible-q2-a4",
              answerText:
                "Non-standard web service (e.g. OpenAPI/Swagger/Informal API",
              dataRating: 3,
            },
            {
              id: "accessible-q2-a5",
              answerText: "Standard web service API (e.g. OGC)",
              dataRating: 4,
            },
          ],
        },
        {
          id: "a3",
          question:
            "Will the metadata record be available even if the data is no longer available?",
          help: `<p>
                    Effort is often required to maintain data resources online which can often lead to it
                    being neglected especially over long periods of time.  This often leads to broken links
                    between the metadata and the data.  Having at least a description of the data in the form
                    of a metadata record means there is a record of the data's existence allowing the possibility
                    of someone tracking it down.
                </p>`,
          defaultAnswer: "accessible-q3-a1",
          answers: [
            {
              id: "accessible-q3-a1",
              answerText: "Unsure",
              dataRating: 0,
            },
            {
              id: "accessible-q3-a2",
              answerText: "No",
              dataRating: 0,
            },
            {
              id: "accessible-q3-a3",
              answerText: "Yes",
              dataRating: 1,
            },
          ],
        },
      ],
    },

    {
      id: "interoperable",
      title: "Interoperable",
      help: "To be interoperable (i.e. data that is interpretable by a computer, so that they can be automatically combined with other data) the data will need to use community agreed formats, language and vocabularies. The metadata will also need to use a community agreed standards and vocabularies, and contain links to related information using identifiers.",
      questionBlock: [
        {
          id: "i1",
          question: "What (file) format(s) is the data available in?",
          help: `<p className="fs-1">
                      When selecting file formats for archiving, the formats should ideally be:
                  </p>
                  <ul>
                    <li>Non-proprietary</li>
                    <li>Unencrypted</li>
                    <li>Uncompressed</li>
                    <li>In common usage by the research community</li>
                    <li>Adherent to an open, documented standard, such as described by the State of California (see
                        <a href="http://www.leginfo.ca.gov/pub/07-08/bill/asm/ab_1651-1700/ab_1668_bill_20070524_amended_asm_v96.pdf" target="_blank">AB 1668, 2007</a>)
                      <ul>
                        <li>Interoperable among diverse platforms and applications</li>
                        <li>Fully published and available royalty-free</li>
                        <li>Fully and independently implementable by multiple software providers on multiple platforms
                            without any intellectual property restrictions for necessary technology
                        </li>
                        <li>Developed and maintained by an open standards organization with a well-defined
                            inclusive process for evolution of the standard.
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <p style="text-indent: 25px;">
                  From: <a href="https://library.stanford.edu/research/data-management-services/data-best-practices/best-practices-file-formats" target="_blank">Stanford University Library - Best practices for file formats</a>
                  </p><p>
                  File format examples:
                  </p><ul>
                      <li> Structured, open standard, machine-readable format  e.g. (text) PDF/A, HTML, Plain text, (images) TIFF, JPEG 2000, GIF, (audio) MP3, AIFF, WAVE, (video) MOV, MPEG, AVI, (Tabular data) CSV
                      </li><li> structured, open standard, non-machine-readable format, e.g. PDF, HTML, JPG
                      </li><li> Proprietary format, e.g. doc (Word), .xls (Excel), .ppt (PowerPoint), .sav
                      </li>
                  </ul>

                  <p>Read more:</p>
                  <ul style="list-style-type: none;">
                      <li><a href="https://www.ands.org.au/__data/assets/pdf_file/0003/731775/File-Formats.pdf" target="_blank">ANDS</a></li>
                      <li><a href="https://www.europeandataportal.eu/elearning/en/module9/#/id/co-01" target="_blank">
                      European Data Portal</a></li>
                  </ul>`,
          defaultAnswer: "interoperable-q1-a1",
          answers: [
            {
              id: "interoperable-q1-a1",
              answerText: "Mostly in a proprietary format",
              dataRating: 0,
            },
            {
              id: "interoperable-q1-a2",
              answerText:
                "In a structured, open standard, non-machine-readable format",
              dataRating: 1,
            },
            {
              id: "interoperable-q1-a3",
              answerText:
                "In a structured, open standard, machine-readable format",
              dataRating: 2,
            },
          ],
        },
        {
          id: "i2",
          question:
            "What best describes the types of vocabularies/ontologies/tagging schemas used to define the data elements?",
          help: `<p>
                    Schema standards are schemas that have gone through a formal validation process by a standards
                    organisation, such as the International Standards Organisation (ISO) or an equivalent body such
                    as the Dublin Core Metadata Initiative (DCMI); or, commonly used and consistently applied metadata
                    schemas that are well documented, endorsed, and maintained can also become ‘de-facto standards’,
                    e.g. RIF-CS for describing data collections and services used in Research Data Australia.
                </p>

                <p>Read more: <a href="http://www.ands.org.au/guides/metadata-working" target="_blank">Metadata schema</a></p>
                <p>
                    Standardised open and universal schemas, e.g,
                    <a href="http://www.dcc.ac.uk/resources/metadata-standards/datacite-metadata-schema" target="_blank"> DataCite Metadata Schema</a>,
                    <a href="http://www.dcc.ac.uk/resources/metadata-standards/prov" target="_blank"> PROV</a>,
                    <a href="http://www.dcc.ac.uk/resources/metadata-standards/dublin-core" target="_blank">Dublin Core</a>
                </p>
                    <p>
                    Domain-specific standards, e.g. .<a href="http://human-phenotype-ontology.github.io/" target="_blank">
                        HPO - Human Phenotype Ontology</a>,
                        <a href="https://www.nlm.nih.gov/mesh/" target="_blank">MeSH - Medical Subject Headings </a>,
                        <a href="http://mcp-profile-docs.readthedocs.io/en/stable/" target="_blank">Marine Community Profile</a>,
                        <a href="http://www.ddialliance.org/" target="_blank">DDI - Data Documentation Initiative</a>

                    For <a href="http://rd-alliance.github.io/metadata-directory/" target="_blank">more examples of
                        standards...</a>
                    </p><p>
                    Resolvable global identifiers - An identifier is any label used to name something uniquely
                (whether online or offline).  URLs are an example of an identifier. So are serial numbers, and
                personal names. A persistent identifier is guaranteed to be managed and kept up to date over a
                defined time period.
                </p><p>
                Read more: <a href="http://www.ands.org.au/guides/persistent-identifiers-awareness" target="_blank">
                Persistent Identifiers</a>
                </p>`,
          defaultAnswer: "interoperable-q2-a1",
          answers: [
            {
              id: "interoperable-q2-a1",
              answerText: "Data elements not described",
              dataRating: 0,
            },
            {
              id: "interoperable-q2-a2",
              answerText:
                "No standards have been applied in the description of data elements",
              dataRating: 1,
            },
            {
              id: "interoperable-q2-a3",
              answerText:
                "Standardised vocabularies/ontologies/schema without global identifiers",
              dataRating: 2,
            },
            {
              id: "interoperable-q2-a4",
              answerText:
                "Standardised open and universal using resolvable global identifiers linking to explanations",
              dataRating: 3,
            },
          ],
        },
        {
          id: "i3",
          question:
            "How is the metadata linked to other data and metadata (to enhance context and clearly indicate relationships)?",
          help: `<p>
                  The goal is to create as many meaningful linkages as possible between (meta)data resources to
                  enrich the contextual knowledge about the data, balanced against the time/energy involved in
                  making a good data model.

                  </p>
                  
                  <h6>Machine-readable (meta)data</h6>

                  <p>(Meta)data in a format that can be automatically read and processed by a computer, such as
                  <a href="http://opendatahandbook.org/glossary/en/terms/csv/" target="_blank">CSV</a>,
                  <a href="http://opendatahandbook.org/glossary/en/terms/json/" target="_blank">JSON</a>,
                  <a href="http://opendatahandbook.org/glossary/en/terms/xml/" target="_blank">XML</a> etc.
                  </p>

                  <p>For more information: <a href="http://opendatahandbook.org/glossary/en/terms/machine-readable/">
                  Open Data Handbook</a>
                  </p>

                  <h6>Linked Data</h6>
                  <p>
                  Linked Data (also known as Linking Data) can be applied to improve the exploitation of the
                  “Web of data.” The expression refers to the publishing of structured data in a way that typed
                  links are created between data from different sources to provide a higher level of usability.
                  By using Linked Data, it is possible to find other, related data. Structured data should meet
                  four requirements to be called Linked Data:
                  </p>
                  <p>
                  <ul>
                    <li>URIs should be assigned to all entities of the dataset.
                    </li>
                    <li>HTTP URIs are required to ensure that all entities can be referenced and cited by users and
                        user agents.
                    </li>
                    <li>Entities should be described using standard formats such as RDF/XML.
                    </li>
                    <li>Links should be created to other, related entity URIs.</li>
                  </ul>
                  </p>

                  <p>
                  All data that fulfil these requirements and are released for the public are called
                  Linked Open Data (LOD).
                  http://www.lesliesikos.com/semantic-web-machine-readable-structured-data-with-meaningful-annotations/
                  </p>
                  <p>
                  Read more under the heading (meta)data include qualified references to other (meta)data in the following resource:
                  https://www.dtls.nl/fair-data/fair-principles-explained/
                  </p>
                  <br>
                  <p>
                  For more information on Linked Data standards -
                  RDF - https://www.w3.org/RDF/
                  <br>
                  Other related linked data standards:
                  OWL - https://www.w3.org/OWL/ , SKOS - https://www.w3.org/2004/02/skos/ , SPARQL - https://www.w3.org/TR/rdf-sparql-query/
                  </p>`,
          defaultAnswer: "interoperable-q3-a1",
          answers: [
            {
              id: "interoperable-q3-a1",
              answerText: "There are no links to other metadata",
              dataRating: 0,
            },
            {
              id: "interoperable-q3-a2",
              answerText:
                "The metadata record includes URI links to related metadata, data and definitions",
              dataRating: 2,
            },
            {
              id: "interoperable-q3-a3",
              answerText:
                "Metadata is represented in a machine readable format, e.g. in a linked data format such as Resource Description Framework (RDF).",
              dataRating: 3,
            },
          ],
        },
      ],
    },

    {
      id: "reusable",
      title: "Reusable",
      help: "Reusable data should maintain its initial richness. For example, it should not be abridged for the purpose of explaining the findings in one particular publication. It needs a clear machine-readable licence and provenance information on how the data was formed. It should also use discipline-specific data and metadata standards to give it rich contextual information that will allow for accurate interpretation and reuse.",
      questionBlock: [
        {
          id: "r1",
          question:
            "Which of the following best describes the license/usage rights attached to the data?",
          help: `<p>
                      If data is not licensed no-one else can use it. In Australia, no licence is regarded as the same
                      as 'all rights reserved', confining any reuse to very limited circumstances. Applying a Creative
                      Commons licence to your data is a simple way to ensure that your data can be reused. The less
                      restrictive the licence, the more that can be done with the data.
                  </p><p>
                      To make it easy for the Web to know when a work is available under a particular license, a
                      “machine readable” version of the license provides a summary of the key freedoms and obligations
                      written into a format that software systems, search engines, and other kinds of technology can
                      understand.

                  </p><p>
                      Example from the <a href="https://creativecommons.org/choose/" target="_blank">
                      Creative Commons License Chooser </a>:
                  </p><p>
                      What appears in the metadata:
                  </p><p>

                  <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
                      <img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png">
                  </a><br>This work is licensed under a
                  <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
                      Creative Commons Attribution 4.0 International License</a>.
                    </p><p>
                      Code snippet:
                  </p>

                    <pre>&lt;a rel="license" href="http://creativecommons.org/licenses/by/4.0/"&gt;
                    &lt;img alt="Creative Commons License" style="border-width:0"
                    src="https://i.creativecommons.org/l/by/4.0/88x31.png"/&gt;
                    &lt;/a&gt;&lt;br /&gt;This work is licensed under a
                    &lt;a rel="license" href="http://creativecommons.org/licenses/by/4.0/"&gt;
                    Creative Commons Attribution 4.0 International License&lt;/a&gt;.
                    </pre>

                     <p> Read more:
                      https://www.ands.org.au/working-with-data/publishing-and-reusing-data/licensing-for-reuse
                    </p>`,
          defaultAnswer: "reusable-q1-a1",
          answers: [
            {
              id: "reusable-q1-a1",
              answerText: "No License",
              dataRating: 0,
            },
            {
              id: "reusable-q1-a2",
              answerText: "Non-standard text-based license",
              dataRating: 2,
            },
            {
              id: "reusable-q1-a3",
              answerText:
                "Non-standard machine-readable license (clearly indicating under what conditions the data may be reused)",
              dataRating: 2,
            },
            {
              id: "reusable-q1-a4",
              answerText: "Standard text based license",
              dataRating: 3,
            },
            {
              id: "reusable-q1-a5",
              answerText:
                "Standard machine-readable license (e.g. Creative Commons)",
              dataRating: 4,
            },
          ],
        },
        {
          id: "r2",
          question:
            "How much provenance information has been captured to facilitate data reuse?",
          help: `<p>Data provenance is used to document where a piece of data comes from and the
                    process and methodology by which it is produced.  It is important to confirm
                    the authenticity of data enabling trust, credibility and reproducibility.
                    This is becoming increasingly important, especially in the eScience community
                    where research is data intensive and often involves complex data transformations
                    and procedures.
                    <a href="https://www.ands.org.au/partners-and-communities/ands-communities/data-provenance-interest-group" target="_blank">
                        Read more…</a>
                    <br/>
                    <br/>
                    Provenance vocabularies such as <a href="https://www.w3.org/2005/Incubator/prov/XGR-prov-20101214/#Recommendations" target="_blank">
                        Provenir Ontology (PROV-O) and others</a>
                </p>`,
          defaultAnswer: "reusable-q2-a1",
          answers: [
            {
              id: "reusable-q2-a1",
              answerText: "No provenance information is recorded",
              dataRating: 0,
            },
            {
              id: "reusable-q2-a2",
              answerText: "Partially recorded",
              dataRating: 1,
            },
            {
              id: "reusable-q2-a3",
              answerText: "Fully recorded in a text format",
              dataRating: 2,
            },
            {
              id: "reusable-q2-a4",
              answerText: "Fully recorded in a machine-readable format",
              dataRating: 3,
            },
          ],
        },
      ],
    },
  ]);

  // Answers
  const [answers, setAnswers] = useState([
    { id: "f1", value: "No Identifier", rating: "0" },
    { id: "f2", value: "No", rating: "0" },
    { id: "f3", value: "The data is not described", rating: "0" },
    {
      id: "f4",
      value: "The data is not described in any repository",
      rating: "0",
    },
    { id: "a1", value: "No access to data or metadata", rating: "0" },
    { id: "a2", value: "No access to data", rating: "0" },
    { id: "a3", value: "Unsure", rating: "0" },
    { id: "i1", value: "Mostly in a proprietary format", rating: "0" },
    { id: "i2", value: "Data elements not described", rating: "0" },
    { id: "i3", value: "There are no links to other metadata", rating: "0" },
    { id: "r1", value: "No License", rating: "0" },
    { id: "r2", value: "No provenance information is recorded", rating: "0" },
  ]);

  const handleChangeAnswer = (id, value, rating) => {
    let newAnswers = answers.map((answer) => {
      return answer.id === id
        ? { ...answer, value: value, rating: rating }
        : answer;
    });
    setAnswers(newAnswers);
  };

  // Results Modal
  const [resultsText, setResultsText] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const handleShowResults = () => {
    const resultsText = generateText({ answers });
    setResultsText(resultsText);
    setShowResults(true);
  };
  const handleCloseResults = () => setShowResults(false);

  // Help Modals
  const [helpText, setHelpText] = useState(null);
  const [showHelp, setShowHelp] = useState(false);
  const handleShowHelp = (text) => {
    setHelpText(text);
    setShowHelp(true);
  };
  const handleCloseHelp = () => setShowHelp(false);

  return (
    <div className="main">
      <div className="container">
        <Introduction />

        {fairQuestions.map((questionSection) => (
          <QuestionSection
            key={questionSection.id}
            questionSection={questionSection}
            answers={answers}
            onHandleShowHelp={handleShowHelp}
            onHandleChangeAnswer={handleChangeAnswer}
          />
        ))}

        <CalculateButton onHandleShowResults={handleShowResults} />

        <ResultsModal
          text={resultsText}
          showResults={showResults}
          onCloseResults={handleCloseResults}
        />

        <HelpModal
          text={helpText}
          showHelp={showHelp}
          onCloseHelp={handleCloseHelp}
        />
      </div>
    </div>
  );
}

export default Main;
