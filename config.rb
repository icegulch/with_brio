
###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# require 'libs/helpers'
# helpers SiteHelpers


# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload,
  host: 'localhost'
end

activate :sprockets

if defined? RailsAssets
  RailsAssets.load_paths.each do |path|
    sprockets.append_path path
  end
end



set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

# Build-specific configuration
configure :build do
  # Minify CSS on build
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Minify HTML
  activate :minify_html, remove_comments: false

  #Use relative URLs   
  activate :relative_assets
end

activate :directory_indexes
page "/404.html", :directory_index => false

proxy "_redirects", "netlify-redirects", ignore: true



# HELPERS
#

helpers do

# TAKEN FROM RAILS API DOCS
  def link_to_unless(condition, name, options = {}, html_options = {}, &block)
    if condition
      if block_given?
        block.arity <= 1 ? capture(name, &block) : capture(name, options, html_options, &block)
      else
        name
      end
    else
      link_to(name, options, html_options)
    end
  end

  def link_to_if(condition, name, options = {}, html_options = {}, &block)
    link_to_unless !condition, name, options, html_options, &block
  end

end


# DYNAMIC PAGES
#

data.products.each do |product|
  proxy "/products/#{product.uri}/index.html", "/products/product-page-template.html", :locals => { :product => product }, :ignore => true
end

data.clients.select { |client| !client.images.blank? }.each do |client|
  proxy "/work/#{client.slug}/index.html", "/work/client-page-template.html", :locals => { :client => client }, :ignore => true
end


