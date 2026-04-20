$file = "src\components\About.jsx"
$content = [System.IO.File]::ReadAllText($file)
$content = $content.Replace(
    'Expertise in AI-assisted development and rapid prototyping. I iterate on complex systems with speed and precision, using state-of-the-art tools.',
    "I don't just code — I leverage AI tools to build smarter and ship faster. From intelligent prototyping to AI-assisted debugging, my workflow is built for speed without sacrificing quality."
)
$content = $content.Replace(
    'Committed to staying at the forefront of the industry, delivering products that help businesses succeed through cutting-edge technology.',
    'I believe the best developers never stop learning. Every project is a chance to push boundaries, explore new patterns, and deliver something that truly matters to the people who use it.'
)
[System.IO.File]::WriteAllText($file, $content)
Write-Host "Done"
