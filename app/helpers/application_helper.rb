module ApplicationHelper
  def component(component_name, locals = {}, &block)
    name = component_name.split('_').first
    render("components/#{name}/#{component_name}", locals, &block)
  end

  alias c component

  def mobile_device?
    request.user_agent =~ /Mobile|webOS|iPad|Android/
  end
end
