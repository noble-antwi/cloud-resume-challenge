# Frontend Technical Specification

- Create a static website that serves asn html Resume.

## Resume Format Considerations

I live in Chicago, USA and dresumes in word/pdf formats are suppose toe xclude personally identifiable infomraitons like Phone Number, Sex or Address. 

I will be using the [Illinois Institute of Technology (IIT)](https://www.iit.edu/sites/default/files/2023-03/new_sample_resume_iltech_1.doc) Template format as the basis of my this resume challenge project.

### Illinois Tech Resume Format Generation

I know html quite well so I will let Gen AI do the heavy lifting to generate the HTML and possibly CSS and then on i will refactor manually the code to meet my preffered standard.

Prompt to Claude

```text
Convert this resume format into htmml

````

Image provided to Claude LLM or  use the attached [MS Word file](./docs/IIT_Resume_Format.doc)
![](./docs/IIT_Resume_Format.png)

This is the [generated output](./docs/resume_format%20-%20Nov-27-2025.html) which i will further work on as i go on

## HTML Adjustments

- UTF-8 will support most languages so keepin that.
- We'll extract our styles into its onw stylesheet after completing the html markup