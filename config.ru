use Rack::Static,
  :urls => ["/images", "/scripts", "/styles", "/fonts", "/favicons"],
  :root => "public",
  :index => 'login.html'

map "/" do
  run lambda { |env|
    [
      200,
      {
        'Content-Type'  => 'text/html',
        'Cache-Control' => 'public, max-age=86400'
      },
      File.open('public/login.html', File::RDONLY)
    ]
  }
end

map "/register.html" do
  run lambda { |env|
    [
      200,
      {
        'Content-Type'  => 'text/html',
        'Cache-Control' => 'public, max-age=86400'
      },
      File.open('public/register.html', File::RDONLY)
    ]
  }
end

map "/forgot-password.html" do
  run lambda { |env|
    [
      200,
      {
        'Content-Type'  => 'text/html',
        'Cache-Control' => 'public, max-age=86400'
      },
      File.open('public/forgot-password.html', File::RDONLY)
    ]
  }
end

map "/new-password.html" do
  run lambda { |env|
    [
      200,
      {
        'Content-Type'  => 'text/html',
        'Cache-Control' => 'public, max-age=86400'
      },
      File.open('public/new-password.html', File::RDONLY)
    ]
  }
end

map "/dashboard.html" do
  run lambda { |env|
    [
      200,
      {
        'Content-Type'  => 'text/html',
        'Cache-Control' => 'public, max-age=86400'
      },
      File.open('public/dashboard.html', File::RDONLY)
    ]
  }
end
