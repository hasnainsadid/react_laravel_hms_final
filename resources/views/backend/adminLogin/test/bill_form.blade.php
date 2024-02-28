@extends('backend.adminLogin.layouts.app')
@section('title', 'Add New Bill')
@section('content')
<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1>Add Billing</h1>
        </div>
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a href="/admin">Dashboard</a></li>
            <li class="breadcrumb-item"><a href="{{route('medicine.index')}}">View Bill</a></li>
            <li class="breadcrumb-item active">Add Billing</li>
          </ol>
        </div>
      </div>
    </div>
  </section>

  <!-- Main content -->
  <section class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <!-- general form elements -->
          <div class="card card-primary">
              {{-- <h1>{{$admission->id}}</h1> --}}
              <form action="{{route('billing')}}" method="post">

                 @csrf
              <div class="card-body">
                <div class="form-group">
                  {{-- <label for="exampleInputPassword1">Patient</label> --}}
                  <input type="hidden" name="p_id" value="{{$id}}" class="form-control form-control-border">
                  <div class="form-group">
                    <label for="exampleInputEmail1"></label>
                    <input type="text" name="name" class="form-control form-control-border" id="exampleInputEmail1">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Address</label>
                    <input type="text" name="address" class="form-control form-control-border" id="exampleInputPassword1">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Date Of Birth</label>
                    <input type="date" name="dob" class="form-control form-control-border" id="exampleInputPassword1">
                  </div>                
                </div>
              </div>
              <div class="card-footer">
                <button type="submit" name="submit" class="btn btn-success m-auto d-block w-25">Submit</button>
              </div>

              </form>
            </div>
        </div>
      </div>
    </div>
  </section>
</div>
@endsection